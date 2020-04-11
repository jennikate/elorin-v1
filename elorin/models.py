from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

# ----- LOCATION
class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class CountryZone(models.Model):
    country = models.ForeignKey(Country, related_name='country', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    predominant_climate = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Place(models.Model):
    country_zone = models.ForeignKey(CountryZone, related_name='zone', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    type_of_place = models.CharField(max_length=100)
    commentary = models.CharField(max_length=1000)

    def __str__(self):
        return f'{self.name}'


# ----- LANGUAGE
class Language(models.Model):
    name = models.CharField(max_length=100)
    script = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


# ----- SPECIES
class Species(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Subspecies(models.Model):
    species = models.ForeignKey(Species, related_name='species', on_delete=models.CASCADE)
    country_zone = models.ForeignKey(CountryZone, related_name='subspecies_zone', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    primary_language = models.ManyToManyField(Language, related_name='languages')

    def __str__(self):
        return f'{self.name}'


class CulturalItem(models.Model):
    country_zone = models.ForeignKey(CountryZone, related_name='cultural_item_zone', on_delete=models.CASCADE)
    subspecies = models.ForeignKey(Subspecies, related_name='subspecies', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    type_of_thing = models.CharField(max_length=100)
    commentary = models.CharField(max_length=1000)

    def __str__(self):
        return f'{self.name}'


# ----- D&D CALCULATOR DATA :: static data, no user input
class ChallengeRatingXP(models.Model):
    challenge = models.CharField(max_length=10)
    xp = models.IntegerField()

    def __str__(self):
        return f'{self.challenge}'
