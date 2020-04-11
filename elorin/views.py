from django.conf import settings
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Language, Species, Subspecies, ChallengeRatingXP, Country
from .serializers import LanguageSerializer, SpeciesSerializer, SubspeciesSerializer, ChallengeRatingXPSerializer, CountrySerializer


class CountryView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        country = Country.objects.all()
        serializer = CountrySerializer(country, many=True)
        return Response(serializer.data)

    def post(self, request):
        country = CountrySerializer(data=request.data)
        if country.is_valid():
            country.save()
            return Response(country.data, status=HTTP_201_CREATED)
        return Response(country.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def put(self, request, pk):
        country = Country.objects.get(pk=pk)
        updated_country = CountrySerializer(country, data=request.data)
        if updated_country.is_valid():
            updated_country.save()
            return Response(updated_country.data)
        return Response(updated_country.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        country = Country.objects.get(pk=pk)
        country.delete()
        return Response(status=HTTP_204_NO_CONTENT)


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


class SpeciesView(APIView):
    def get(self, _request):
        species = Species.objects.all()
        serializer = SpeciesSerializer(species, many=True)
        return Response(serializer.data)

    def post(self, request):
        species = SpeciesSerializer(data=request.data)
        if species.is_valid():
            species.save()
            return Response(species.data, status=HTTP_201_CREATED)
        return Response(species.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def put(self, request, pk):
        species = Species.objects.get(pk=pk)
        updated_species = SpeciesSerializer(species, data=request.data)
        if updated_species.is_valid():
            updated_species.save()
            return Response(updated_species.data)
        return Response(updated_species.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        species = Species.objects.get(pk=pk)
        species.delete()
        return Response(status=HTTP_204_NO_CONTENT)


class ChallengeRatingView(APIView):

    def get(self, _request):
        challenge = ChallengeRatingXP.objects.all()
        serializer = ChallengeRatingXPSerializer(challenge, many=True)
        return Response(serializer.data)

    def post(self, request):
        challenge = ChallengeRatingXPSerializer(data=request.data)
        if challenge.is_valid():
            challenge.save()
            return Response(challenge.data, status=HTTP_201_CREATED)
        return Response(challenge.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
