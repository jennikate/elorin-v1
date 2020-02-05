from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Language, Species, Subspecies
from .serializers import LanguageSerializer, SpeciesSerializer, SubspeciesSerializer
from django.conf import settings                                                                                                                                     
from django.http import HttpResponse

class LanguageListView(APIView):

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
