from django.urls import path, include
from .views import HomePageView


urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]


