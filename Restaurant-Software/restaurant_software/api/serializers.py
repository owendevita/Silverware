from rest_framework import serializers
from .models import Restaurant, Employee, Menu, Order, RestaurantLayout, Waitlist

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name']

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'employee_id', 'password', 'permissions', 'restaurant']

class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waitlist
        fields = ['id', 'list', 'restaurant']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'items', 'restaurant', 'name']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'table_number', 'items', 'complete', 'employee', 'restaurant']

class RestaurantLayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantLayout
        fields = ['id', 'restaurant', 'position']