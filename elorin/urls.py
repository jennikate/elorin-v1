from django.urls import path
from .views import LanguageListView, ChallengeRatingView

urlpatterns = [
    path('languages/', LanguageListView.as_view()),
    path('languages/<int:pk>/', LanguageListView.as_view()),
    path('challenge/', ChallengeRatingView.as_view())
]
