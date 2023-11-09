from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
""" class SubjectListCreateView(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

    def create(self, request, *args, **kwargs):
        print(request.headers)
        if 'name' not in request.data.keys():
            return Response({'error': True, 'message': f"Name data is missing"})
        subject = Subject.objects.filter(name=request.data['name']).values()
        if len(subject) > 0:
            return Response({'error': True, 'message': f"Subject with name `{request.data['name']}` already exist"})
        serializer = SubjectSerializer(data=request.data)
        return Response({'error': False, 'message': "Subject was created successfully"})

class SubjectRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    

class TopicListCreateView(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

    def create(self, request, *args, **kwargs):
        fields = ['name', 'subject']
        for field in fields:
            if field not in request.data.keys():
                return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
        topic = Topic.objects.filter(name=request.data['name']).values()
        if len(topic) > 0:
            return Response({'error': True, 'message': f"Topic with name `{request.data['name']}` already exist"})
        return Response({'error': False, 'message': "Topic was created successfully"})

class TopicRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer """

class LearningCueListCreateView(generics.ListCreateAPIView):
    queryset = LearningCue.objects.all()
    serializer_class = LearningCueSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = queryset.filter(user__id=request.user.id).values()

        return Response(data)

    def create(self, request, *args, **kwargs):
        fields = ['subject', 'topic']
        for field in fields:
            if field not in request.data.keys():
                return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
        cue = LearningCue.objects.filter(subject=request.data['subject'], topic=request.data['topic']).values()
        if len(cue) > 0:
            return Response({'error': True, 'message': f"Learning Cue with subject `{request.data['subject']}` and topic `{request.data['topic']}` already exist"})
        serializer = LearningCueSerializer(data={**request.data, "user": request.user.id} )
        if not serializer.is_valid():
            return Response({ "error": True, "messsage": "Learning Cue creation was not successful"})
        serializer.save()
        return Response({'error': False, 'message': "Topic was created successfully"})

class LearningCueRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LearningCue.objects.all()
    serializer_class = LearningCueSerializer

class ConceptListCreateView(generics.ListCreateAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer

    def list (self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = queryset.filter(cue__user__id=request.user.id).values()

        return Response(data)
    
    def create(self, request, *args, **kwargs):
        fields = ['name', 'cue']
        for field in fields:
            if field not in request.data.keys():
                return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
        concept = Concept.objects.filter(name=request.data['name']).values()
        if len(concept) > 0:
            return Response({'error': True, 'message': f"Concept with name `{request.data['name']}` already exist"})
        serializer =ConceptSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({ "error": True, "messsage": "Concept creation was not successful"})
        serializer.save()
        return Response({'error': False, 'message': "Concept was created successfully"})


class ConceptRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer

class SubConceptListCreateView(generics.ListCreateAPIView):
    queryset = SubConcept.objects.all()
    serializer_class = SubConceptSerializer

    def list (self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = queryset.filter(concept__cue__user__id=request.user.id).values()

        return Response(data)

    def create(self, request, *args, **kwargs):
        fields = ['name', 'concept']
        subconcept = []

        data = request.data
        if "name" in data.keys():
            subconcept = SubConcept.objects.filter(name=data['name']).values()

        if len(subconcept) > 0:
            return Response({'error': True, 'message': f"Subconcept with name {data['name']} already exist"})
        else:
            serializer = SubConceptSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'error': False, 'message': "Subconcept was created successfully"})
            else:
                for field in fields:
                    if field not in serializer.data.keys():
                        return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
            

class SubConceptRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SubConcept.objects.all()
    serializer_class = SubConceptSerializer

class NoteListCreateView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def list (self, request, *args, **kwargs):
        queryset = self.get_queryset()
        data = queryset.filter(concept__cue__user__id=request.user.id).values()

        return Response(data)
    
    def create(self, request, *args, **kwargs):
        fields = ['content', 'concept']
        note = []

        data = request.data
        if "concept" in data.keys():
            note = Note.objects.filter(concept=data['concept']).values()

        if len(note) > 0:
            return Response({'error': True, 'message': f"Subconcept with name {data['name']} already exist"})
        else:
            serializer = NoteSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'error': False, 'message': "Note was created successfully"})
            else:
                for field in fields:
                    if field not in serializer.data.keys():
                        return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
    


class NoteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class ReviewQuestionListCreateView(generics.ListCreateAPIView):
    queryset = ReviewQuestion.objects.all()
    serializer_class = ReviewQuestion

class ReviewQuestionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReviewQuestion.objects.all()
    serializer_class = ReviewQuestion

