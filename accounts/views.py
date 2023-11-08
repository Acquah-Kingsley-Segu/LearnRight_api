import pytz
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate, login
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import render, redirect, get_object_or_404
from django.template.loader import render_to_string
from django.urls import reverse, reverse_lazy
from django.core.mail import EmailMessage
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from datetime import datetime, timedelta
from django.utils import timezone
from django.views.generic import FormView, View, TemplateView
from django.views.generic.edit import UpdateView
from django.contrib import messages

from rest_framework.response import Response
from rest_framework.views import APIView

from .forms import CustomUserCreationForm, CustomAuthenticationForm
                    

from .models import CustomUser


class SignUpView(FormView):
    form_class = CustomUserCreationForm
    template_name = 'registration/signup.html'
    def get(self, request):
        form = self.form_class()
        return render(request, self.template_name, {'form': form})
    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            # Send account activation email with time bound=5mins testing
            one_hour_from_now = timezone.now() + timedelta(hours=1)  # expires in an hour time
            host_name = request.get_host()
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            activation_link = f"{request.scheme}://{host_name}{reverse('activate',  kwargs={'uidb64': uid, 'token': token})}?expires={one_hour_from_now.timestamp()}"
            email_html_message = render_to_string('registration/account_activation_email.html', {
                'user': user,
                'activation_link': activation_link,
            })
            email = EmailMessage(
                'Account Activation',
                email_html_message, 
                from_email='Maxwell',
                to=[user.email],
                )
            email.content_subtype="html"
            email.send()
            messages.info(request, 'Your account has been created. An activation link has been sent to your email address. '
                                    'Click on the link to activate your account and log in.')
            return redirect('login')
        return render(request, self.template_name, {'form': form})


class ActivationView(TemplateView):
    def get(self, request, uidb64, token):
        try:
            expires = request.GET.get('expires')
            if expires is not None:
                expiration_time = datetime.fromtimestamp(float(expires), tz=pytz.UTC) 
                if timezone.now() > expiration_time:
                    return redirect('get_new_link', uidb64)  
                # Send user reactivation link to activate and then login again
                # if link has expired
                
                # if link hasn't expired, let's go ahead and retrieve user
                uid = force_str(urlsafe_base64_decode(uidb64))
                user = CustomUser.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
            user = None
        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            messages.success(request, 'Congratulations! Your account has been activated. You can now log in.')
            return redirect('login')
        else:
            messages.error(request, 'Invalid activation link. Please sign up to receive an activation link.')
            return redirect('signup')
  

class LoginView(FormView):
    form_class = CustomAuthenticationForm
    template_name = 'registration/login.html'
    # this was a problem 
    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form': form})
    def post(self, request, *args, **kwargs):
         # direct authenticated users to home 
        if request.user.is_authenticated:
            return redirect('home')
        form = self.form_class(request.POST)
        if form.is_valid():
            username_or_email = form.cleaned_data['username_or_email'] 
            # Check if the username_or_email exists in either username or email field
            user = authenticate(request, username=username_or_email, password=form.cleaned_data['password'])
            if not user:
                user = CustomUser.objects.filter(email=username_or_email).first()
            if user:
                if user.is_active and user.check_password(form.cleaned_data['password']):
                    login(request, user)
                    return redirect('home')
                else:
                    messages.warning(request, 'Account Not Activated. Check Your Email/Spam for Activation link to verify your account.')
            else:
                messages.error(request, 'Invalid login credentials. Please check your details properly.')
        return Response({
            'token': form,
            'user': request.user
        })



# class UsernameChangeView(LoginRequiredMixin, UpdateView):
#     model = CustomUser
#     form_class = ChangeUsername
#     template_name = 'registration/change_username.html'
#     success_url = reverse_lazy('home')


# # to get user details for edit
# class UserDetailView(LoginRequiredMixin, DetailView):
#     model = CustomUser
#     template_name = 'user_detail.html'


# This view regenerate a new link for user to finish signup process
class GetNewActivationLinkView(View):
    def get(self, request, uidb64, token):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = get_object_or_404(CustomUser, pk=uid)
        except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
            user = None
        if user is not None and not user.is_active:
            # Generate new link for user to activate account
            one_hour_from_now = timezone.now() + timedelta(hours=1)
            host_name = request.get_host()
            # token was not generated a new, by kobby
            # no
            activation_link = f"{request.scheme}://{host_name}{reverse('activate', kwargs={'uidb64': uidb64, 'token': token})}?expires={one_hour_from_now.timestamp()}"
            email_html_message = render_to_string('registration/new_link_account_activation_email.html', {
                'user': user,
                'activation_link': activation_link,
            })
            email = EmailMessage(
                'Request for New Account Activation Link',
                email_html_message, 
                from_email='Maxwell',
                to=[user.email],
            )
            email.content_subtype = "html"
            email.send()
            messages.info(request, 'A new activation link has been sent to your email address. '
                                    'Click on the link asap to activate your account.')
        else:
            messages.error(request, 'Invalid request. Please sign up again to receive a new activation link.')
        return redirect('login', uidb64, token)
    # you want to pass any data to the template to be rendered, 
    # you have to specify them in redirect and then the urls path.
