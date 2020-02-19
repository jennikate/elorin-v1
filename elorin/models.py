from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

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
    name = models.CharField(max_length=100)
    primary_language = models.ManyToManyField(Language, related_name='languages')

    def __str__(self):
        return f'{self.name}'


# ----- D&D CALCULATOR DATA :: static data, no user input
class ChallengeRatingXP(models.Model):
    challenge = models.CharField(max_length=3)
    xp = models.IntegerField()

    def __str__(self):
        return f'{self.challenge}'
