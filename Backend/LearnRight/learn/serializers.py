from rest_framework import serializers
from .models import *

""" class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__' """

class LearningCueSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningCue
        fields = '__all__'

class ConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Concept
        fields = '__all__'

class SubConceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubConcept
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ReviewQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewQuestion
        fields = '__all__'