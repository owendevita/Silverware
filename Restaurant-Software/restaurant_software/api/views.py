from rest_framework import viewsets
from .models import Restaurant, Employee, Menu, Order, RestaurantLayout
from .serializers import (
    RestaurantSerializer,
    EmployeeSerializer,
    MenuSerializer,
    OrderSerializer,
    RestaurantLayoutSerializer
)

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class RestaurantLayoutViewSet(viewsets.ModelViewSet):
    queryset = RestaurantLayout.objects.all()
    serializer_class = RestaurantLayoutSerializer
