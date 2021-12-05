from django.db import models
from django.contrib.postgres.fields import ArrayField
from .validators import validate_age, validate_rut, validate_doctor_availability


class SexClass(models.TextChoices):
    MALE = 'M', 'Masculino'
    FEMALE = 'F', 'Femenino'
    OTHER = 'X', 'Otro'


class Doctor(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=60)
    sexo = models.CharField(max_length=1, choices=SexClass.choices)
    especialidad = models.CharField(max_length=70)

    def __str__(self):
        if self.sexo == 'F':
            return 'Dra. {} {}'.format(self.nombre, self.apellido)
        return 'Dr. {} {}'.format(self.nombre, self.apellido)
    

class Horario(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    # fecha = models.DateField('fecha')
    # hora = models.TimeField('hora')
    disponibilidad = models.DateTimeField('disponibilidad')
    estaDisponible = models.BooleanField(default=True)

    def __str__(self):
        return '{}'.format(self.disponibilidad)


class Consulta(models.Model):
    # Nombres
    primer_nombre = models.CharField(max_length=50)
    segundo_nombre = models.CharField(max_length=50)

    # Apellido Paterno
    apellido_paterno = models.CharField(max_length=50)

    # Apellido Materno
    apellido_materno = models.CharField(max_length=50)

    # Rut
    rut = models.CharField(max_length=12, validators=[validate_rut])

    # Edad
    edad = models.IntegerField(validators=[validate_age])

    # Sexo
    sexo = models.CharField(max_length=1, choices=SexClass.choices)

    # Nombre Medico
    nombre_medico = models.ForeignKey(Doctor, on_delete=models.CASCADE)

    # Fecha y Hora Consulta
    fecha_consulta = models.OneToOneField(Horario, on_delete=models.CASCADE)

    # Correo
    email = models.EmailField(max_length=200)  # restrict to specefic domains?

    def __str__(self):
        return '{} {}'.format(self.primer_nombre, self.apellido_paterno)