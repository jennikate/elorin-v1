from django.contrib import admin
from .models import Language, Species, Subspecies, ChallengeRatingXP, Country, CountryZone, Place, CulturalItem

# Register your models here.
admin.site.register(Country)
admin.site.register(CountryZone)
admin.site.register(Place)
admin.site.register(Language)
admin.site.register(Species)
admin.site.register(Subspecies)
admin.site.register(CulturalItem)
admin.site.register(ChallengeRatingXP)
