from django.urls import path
from .views import *

urlpatterns = [
    path('login', AccountAuthToken.as_view()),
    path('signup', SignUpView.as_view()),
    path('users', UsersListView.as_view())
]