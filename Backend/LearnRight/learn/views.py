from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class SubjectListCreateView(generics.ListCreateAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        print(request.headers)
        if 'name' not in request.data.keys():
            return Response({'error': True, 'message': f"Name data is missing"})
        subject = Subject.objects.filter(name=request.data['name']).values()
        if len(subject) > 0:
            return Response({'error': True, 'message': f"Subject with name `{request.data['name']}` already exist"})
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
    serializer_class = TopicSerializer

class ConceptListCreateView(generics.ListCreateAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer

    def create(self, request, *args, **kwargs):
        fields = ['name', 'topic']
        for field in fields:
            if field not in request.data.keys():
                return Response({'error': True, 'message': f"{field.capitalize()} data is missing"})
        concept = Concept.objects.filter(name=request.data['name']).values()
        if len(concept) > 0:
            return Response({'error': True, 'message': f"Concept with name `{request.data['name']}` already exist"})
        return Response({'error': False, 'message': "Concept was created successfully"})


class ConceptRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptSerializer

class SubConceptListCreateView(generics.ListCreateAPIView):
    queryset = SubConcept.objects.all()
    serializer_class = SubConceptSerializer

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

class NoteRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class ReviewQuestionListCreateView(generics.ListCreateAPIView):
    queryset = ReviewQuestion.objects.all()
    serializer_class = ReviewQuestion

class ReviewQuestionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReviewQuestion.objects.all()
    serializer_class = ReviewQuestion

