import rest_framework
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin, CreateModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK
from dmp.health.api.serializers import PatientSerializer
from dmp.health.models import Patient

class PatientViewSet(

    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    GenericViewSet
): 
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = (AllowAny, )
    

    def create(self, request): 
        
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=HTTP_201_CREATED)
  
