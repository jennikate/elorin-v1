from django.contrib import admin
from .models import Language, Species, Subspecies, ChallengeRatingXP

# Register your models here.
admin.site.register(Language)
admin.site.register(Species)
admin.site.register(Subspecies)
admin.site.register(ChallengeRatingXP)
