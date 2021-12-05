from django.shortcuts import render
from .serializers import DoctorSerializer, HorarioSerializer, ConsultaSerializer
from rest_framework import viewsets
from .models import Doctor, Horario, Consulta


class DoctorView(viewsets.ModelViewSet):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()


class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()


class ConsultaView(viewsets.ModelViewSet):
    serializer_class = ConsultaSerializer
    queryset = Consulta.objects.all()