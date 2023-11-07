from django.contrib.auth.models import BaseUserManager, AbstractUser
from django.db import models


# Create your models here.


class CustomUserManager(BaseUserManager):
    