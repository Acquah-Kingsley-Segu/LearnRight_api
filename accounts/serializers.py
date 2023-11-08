from django.contrib.auth import get_user_model
from rest_framework import generics, serializers

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password1', 'password2',]
        extra_kwargs = {'password': {'write_only': True}}  # Make password write-only