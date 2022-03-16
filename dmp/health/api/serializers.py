from dmp.health.models import Patient
from rest_framework import serializers

class PatientSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Patient 
        fields = ["name", ]