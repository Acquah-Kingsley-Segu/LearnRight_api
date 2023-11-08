from django.db import models

# Create your models here.
class Subject(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

class Topic(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

class Concept(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

class SubConcept(models.Model):
    name = models.CharField(max_length=255)
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)

class Note(models.Model):
    content = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    conceot = models.ForeignKey(Concept, on_delete=models.CASCADE)

class ReviewQuestion(models.Model):
    question = models.CharField(max_length=255)