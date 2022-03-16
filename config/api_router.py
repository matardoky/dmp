from posixpath import basename
from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from dmp.users.api.views import UserViewSet

from dmp.health.api.views import PatientViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("patient", PatientViewSet)


app_name = "api"
urlpatterns = router.urls
