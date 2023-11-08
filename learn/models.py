from django.db import models
from django.contrib.auth import get_user_model



class Subject(models.Model):
    name = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name
    

class Topic(models.Model):
    topic = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='subject')
    topic_name = models.CharField(max_length=225)
    
    def __str__(self):
        return self.topic_name
    

class Concept(models.Model):
    concept = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='topic')
    concept_name = models.CharField(max_length=True)

    def __str__(self):
        return self.concept_name
    

class Notes(models.Model):
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE, related_name='concept_notes')
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text
    




# class Subject(models.Model):
#     title = models.CharField(max_length=200)
#     slug = models.SlugField(max_length=200, unique=True)
#     class Meta:
#         ordering = ['title']

#     def __str__(self):
#         return self.title
    

# class Course(models.Model):
#     owner = models.ForeignKey(get_user_model(), related_name='courses_created', \
#                               on_delete=models.CASCADE)
#     subject = models.ForeignKey(Subject, related_name='courses', \
#                                 on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     slug = models.SlugField(max_length=200, unique=True)
#     overview = models.TextField()
#     created = models.DateTimeField(auto_now_add=True)
#     class Meta:
#         ordering = ['-created']

#     def __str__(self):
#         return self.title
    
# class Topic(models.Model):
#     course = models.ForeignKey(Course, related_name='topics',  
#                                on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.title
    
