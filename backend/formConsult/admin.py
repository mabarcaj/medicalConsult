from django.contrib import admin
from .models import Doctor, Horario, Consulta


admin.site.register(Doctor)
admin.site.register(Horario)
admin.site.register(Consulta)
