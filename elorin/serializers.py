from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Language, Species, Subspecies
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ('id', 'name', 'script')

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ('id', 'name')

class SubspeciesSerializer(serializers.ModelSerializer):
    species = SpeciesSerializer()
    class Meta:
        model = Subspecies
        fields = ('id', 'species', 'name', 'primary_language')
