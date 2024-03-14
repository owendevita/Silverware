from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RestaurantViewSet,
    EmployeeViewSet,
    MenuViewSet,
    OrderViewSet,
    RestaurantLayoutViewSet
)

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'restaurants', RestaurantViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'menus', MenuViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'restaurantlayout', RestaurantLayoutViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
