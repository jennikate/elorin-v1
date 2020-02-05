from django.contrib import admin
from .models import Language, Species, Subspecies

# Register your models here.
admin.site.register(Language)
admin.site.register(Species)
admin.site.register(Subspecies)
