from django.urls import path
from .views import LanguageListView, ChallengeRatingPost

urlpatterns = [
    path('languages/', LanguageListView.as_view()),
    path('languages/<int:pk>/', LanguageListView.as_view()),
    path('challenge/', ChallengeRatingPost.as_view())
]
