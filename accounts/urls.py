from django.urls import path, include
from .views import (SignUpView, ActivationView, LoginView, 
                     GetNewActivationLinkView)

urlpatterns = [
    # signup url
    path('signup/', SignUpView.as_view(), name='signup'),
    # account activation link
    path('activate/<str:uidb64>/<str:token>/', ActivationView.as_view(), name='activate'),
    # login url
    path('login/<str:uidb64>/<str:token>/', LoginView.as_view(), name='login'),
    path('get-new-link/<str:uid64>/<str:token>/', GetNewActivationLinkView.as_view(), name='get_new_link'),

   
]



