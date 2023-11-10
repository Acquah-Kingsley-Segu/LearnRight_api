from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.views import APIView

from .serializers import UserSerializer

# Create your views here.

class Logout(APIView):
    def get(self, request, format=None):
        # delelte the token for force login
        request.user.auth_token.delete()
        return Response({ "error": False, "message": "Logged out successfully"}, status=status.HTTP_200_OK)



# Overriding rest_framework.authtoken.views.obtain_auth_token for login
class AccountAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            "username": user.username,
            "email": user.email
        })
    
class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        user = User.objects.filter(username=request.data['username'], email=request.data['email']).values()
        if len(user) > 0:
            return Response({"error": True, "message": "You already have an account. Please Login"})
        username = User.objects.filter(username=request.data['username']).values()
        if len(username) > 0:
            return Response({"error": True, "message": "Username is already taken"})
        new_user = User.objects.create_user(username=request.data['username'], email=request.data['email'])
        new_user.set_password(request.data['password'])
        new_user.save()
        return Response({"error": False, "message": "Account created successfully"})

class UsersListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer