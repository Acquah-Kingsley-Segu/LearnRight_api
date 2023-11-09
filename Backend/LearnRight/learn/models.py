from django.db import models
from django.contrib.auth.models import User

# Create your models here.
""" class Subject(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class Topic(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    user =  """

class LearningCue(models.Model):
    subject = models.CharField(max_length=255, verbose_name="subject_name")
    topic = models.CharField(max_length=255, verbose_name="topic_name")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)

class Concept(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    cue = models.ForeignKey(LearningCue, on_delete=models.CASCADE)

class SubConcept(models.Model):
    name = models.CharField(max_length=255)
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)

class Note(models.Model):
    content = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)

class ReviewQuestion(models.Model):
    question = models.CharField(max_length=255)
