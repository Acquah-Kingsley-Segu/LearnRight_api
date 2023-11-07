from django.urls import path

from accounts.views import HomePageView


urlpatterns = [
    path('set/', HomePageView.as_view(), name='home'),
]

