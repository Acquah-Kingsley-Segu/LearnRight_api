from django.urls import path
from .views import *

urlpatterns = [
    path('learning', LearningCueListCreateView.as_view()),
    path('concept', ConceptListCreateView.as_view()),
    path('concept/<int:pk>', ConceptRetrieveUpdateDestroyView.as_view()),
    path('subconcept', SubConceptListCreateView.as_view()),
    path('subconcept/<int:pk>', SubConceptRetrieveUpdateDestroyView.as_view()),
    path('note', NoteListCreateView.as_view()),
    path('note/<int:pk>', NoteRetrieveUpdateDestroyView.as_view()),
    path('review_questions', ReviewQuestionListCreateView.as_view()),
    path('review_questions/<int:pk>', ReviewQuestionRetrieveUpdateDestroyView.as_view()),
]

""" path('subject', SubjectListCreateView.as_view()),
    path('subject/<int:pk>', SubjectRetrieveUpdateDestroyView.as_view()),
    path('topic', TopicListCreateView.as_view()),
    path('topic/<int:pk>', TopicRetrieveUpdateDestroyView.as_view()), """