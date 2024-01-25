# urls.py
from rest_framework import routers
from .views import ParticipantViewSet, EventViewSet, ParticipationViewSet

router = routers.DefaultRouter()
router.register(r'participants', ParticipantViewSet)
router.register(r'events', EventViewSet)
router.register(r'participations', ParticipationViewSet)

urlpatterns = router.urls
