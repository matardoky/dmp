from atexit import register
from django.contrib import admin

# Register your models here.
from dmp.health.models import Patient

admin.site.register(Patient)