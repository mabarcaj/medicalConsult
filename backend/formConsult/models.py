from django.db import models
from django.contrib.postgres.fields import ArrayField
from .validators import validate_age, validate_rut


class SexClass(models.TextChoices):
    MALE = 'M', 'Masculino'
    FEMALE = 'F', 'Femenino'
    OTHER = 'X', 'Otro'


class Doctor(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=60)
    especialidad = models.CharField(max_length=70)
    # horarios = ArrayField(models.DateTimeField()) # convert later
    horario_disponible = models.DateTimeField('horario disponible')


class Consulta(models.Model):
    # Nombres
    primer_nombre = models.CharField(max_length=50, default='A')
    segundo_nombre = models.CharField(max_length=50, default='B')

    # Apellido Paterno
    apellido_paterno = models.CharField(max_length=50, default='C')

    # Apellido Materno
    apellido_materno = models.CharField(max_length=50, default='D')

    # Rut
    rut = models.CharField(max_length=12, validators=[validate_rut], default="12345678-9")

    # Edad
    edad = models.IntegerField(validators=[validate_age])

    # Sexo
    sexo = models.CharField(max_length=1, choices=SexClass.choices)

    # Nombre Medico
    # nombre_medico = models.ForeignKey(Doctor, on_delete=models.CASCADE, default= 1)
    nombr_medico = models.CharField(max_length=50, default='John Doe')

    # Fecha y Hora Consulta
    fecha_consulta = models.DateTimeField('fecha consulta') # maybe this will be a class later on

    # Correo
    email = models.EmailField(max_length=200)  # restrict to specefic domains?

    def __str__(self):
        return '{} {}'.format(self.primer_nombre, self.apellido_paterno)