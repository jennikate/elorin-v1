from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Language, Species, Subspecies
from .serializers import LanguageSerializer, SpeciesSerializer, SubspeciesSerializer, ChallengeRatingXPSerializer
from django.conf import settings
from django.http import HttpResponse


class LanguageListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        languages = Language.objects.all()
        serializer = LanguageSerializer(languages, many=True)
        return Response(serializer.data)

    def post(self, request):
        language = LanguageSerializer(data=request.data)
        if language.is_valid():
            language.save()
            return Response(language.data, status=HTTP_201_CREATED)
        return Response(language.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def put(self, request, pk):
        language = Language.objects.get(pk=pk)
        updated_language = LanguageSerializer(language, data=request.data)
        if updated_language.is_valid():
            updated_language.save()
            return Response(updated_language.data)
        return Response(updated_language.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        language = Language.objects.get(pk=pk)
        language.delete()
        return Response(status=HTTP_204_NO_CONTENT)


class ChallengeRatingPost(APIView):

    def post(self, request):
        challenge = ChallengeRatingXPSerializer(data=request.data)
        if challenge.is_valid():
            challenge.save()
            return Response(challenge.data, status=HTTP_201_CREATED)
        return Response(challenge.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
