from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Language, Species, Subspecies, ChallengeRatingXP, Country, CountryZone, Place, CulturalItem
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name')

class CountryZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryZone
        fields = ('id', 'name', 'country', 'predominant_climate')

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('id', 'name', 'zone', 'type_of_place', 'commentary')

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
        fields = ('id', 'species', 'name', 'primary_language', 'subspecies_zone')

class CulturalItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalItem
        fields = ('id', 'name', 'country_zone', 'cultural_item_zone', 'type_of_thing', 'commentary')

class ChallengeRatingXPSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChallengeRatingXP
        fields = ('id', 'challenge', 'xp')
