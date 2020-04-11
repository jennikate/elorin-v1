from django.urls import path
from .views import LanguageListView, ChallengeRatingView, CountryView

urlpatterns = [
    path('country/', CountryView.as_view()),
    path('country/<int:pk>/', CountryView.as_view()),
    path('languages/', LanguageListView.as_view()),
    path('languages/<int:pk>/', LanguageListView.as_view()),
    path('challenge/', ChallengeRatingView.as_view())
]
