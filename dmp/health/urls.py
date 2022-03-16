from django.urls import path
from dmp.health.views import index

app_name = "health"

urlpatterns = [
   path("", index)
]