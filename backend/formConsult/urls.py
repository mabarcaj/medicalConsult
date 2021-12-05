from rest_framework import routers
from .views import DoctorView, HorarioView, ConsultaView

router = routers.DefaultRouter()
router.register('doctor', DoctorView, 'doctores')
router.register('horario', HorarioView, 'horarios')
router.register('consulta', ConsultaView, 'consultas')

urlpatterns = router.urls