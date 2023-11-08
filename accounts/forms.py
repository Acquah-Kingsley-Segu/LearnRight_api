from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate
from .models import CustomUser



# by Bard
class CustomAuthenticationForm(AuthenticationForm):
    username_or_email = forms.CharField(label='Username or Email')

    def clean(self):
        username_or_email = self.cleaned_data.get('username_or_email')
        password = self.cleaned_data.get('password')
        if username_or_email:
            try:
                user = CustomUser.objects.get(email=username_or_email)
            except CustomUser.DoesNotExist:
                try:
                    user = authenticate(username=username_or_email, password=password)
                except:
                    raise forms.ValidationError('Username or Email does not exist.')
            if user is None or not user.check_password(password):
                raise forms.ValidationError('Invalid login credentials.')
            self.user_cache = user
        return self.cleaned_data


class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(label='Username', max_length=50)
    email = forms.EmailField(label='Email Address')
    
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('username', 'email',)


# Edit Username after email signup and verifications
class ChangeUsername(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ('username',)

