from django.contrib.auth.models import AbstractUser, BaseUserManager, Permission, Group
from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

# class CustomUserManager(BaseUserManager):
#     def create_user(self, username=None, email=None, password=None, **extra_fields):
#         if not username and not email:
#             raise ValueError('You must provide either a username or an email')
#         if not email:
#             raise ValueError('Email must be set...')
#         email = self.normalize_email(email) if email else None
#         username = email.split('@')[0] if not username else username
#         user = self.model(username=username, email=email, **extra_fields)
#         user.set_password(password)
#         user.save()
#         return user


#     def create_superuser(self, username=None, email=None, password=None, **extra_fields):
#         if not email:
#             raise ValueError('Email must be set...')
#         email = self.normalize_email(email) if email else None

#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         if extra_fields.get('is_staff') is not True:
#             raise ValueError('Superuser must have is_staff=True')
#         if extra_fields.get('is_superuser') is not True:
#             raise ValueError('Superuser must have is_superuser=True')

#         return self.create_user(username=username, email=email, password=password, **extra_fields)

   
#     def authenticate(self, request, email=None, username=None, password=None, **kwargs):
#             UserModel = get_user_model()
#             try:
#                 # Try to retrieve the user by username or email
#                 user = UserModel.objects.get(
#                     models.Q(username__iexact=username) | models.Q(email__iexact=email)
#                 )
#             except UserModel.DoesNotExist:
#                 return None
#             else:
#                 # Check the password and return the user if valid
#                 if user.check_password(password):
#                     return user
#             return None



class CustomUser(AbstractUser):
    username = models.CharField('Username', unique=True, max_length=150, )
    email = models.EmailField('Email Address', unique=True)
    # objects = CustomUserManager()

    
    # class Meta:
    #     swappable = 'AUTH_USER_MODEL'

    # # Override the related names for groups and user_permissions
    # groups = models.ManyToManyField(Group, verbose_name = ('groups'), 
    #                                 blank=True,
    #                                 related_name='custom_user_groups')  # Example related_name for groups
    # user_permissions = models.ManyToManyField(
    #     Permission,
    #     verbose_name = ('user permissions'),
    #     blank=True,
    #     related_name='custom_user_permissions'  # Example related_name for user_permissions
    # )

    def __str__(self):
        return self.username
    
    # def get_absolute_url(self):
    #     return reverse('user-details', kwargs={"pk": self.pk})

