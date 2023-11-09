from django.urls import path
from django.contrib.auth import views  # for logoutview
from rest_framework import views 
from .views import *

urlpatterns = [
    path('login', AccountAuthToken.as_view()),
    path('signup', SignUpView.as_view()),
    path('users', UsersListView.as_view()),
    path('logout', Logout.as_view(), name='logout'),
    #path('api/logout/', views.logout, name='api_logout'),  # Logout view
    #path('logout/', views.LogoutView.as_view(), name='logout'),
]