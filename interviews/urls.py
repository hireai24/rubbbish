from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusinessProfileViewSet, JobDescriptionViewSet, CandidateProfileViewSet

router = DefaultRouter()
router.register(r'businesses', BusinessProfileViewSet)
router.register(r'jobs', JobDescriptionViewSet)
router.register(r'candidates', CandidateProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
