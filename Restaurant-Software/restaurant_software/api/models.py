from django.db import models
from django.contrib.auth.models import AbstractBaseUser

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=35)

class Employee(AbstractBaseUser):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    employee_id = models.PositiveIntegerField(unique=True)
    password = models.CharField(max_length=128)
    permissions = models.JSONField()

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    USERNAME_FIELD = "employee_id"
    REQUIRED_FIELDS=['password', 'restaurant']

class Menu(models.Model):
    items = models.JSONField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Waitlist(models.Model):
    list = models.JSONField() # {{'name': 'John', party_size: 4}, {'name' : 'Sally', party_size: 3}}
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Order(models.Model):
    table_number = models.PositiveSmallIntegerField()
    items = models.JSONField()
    complete = models.BooleanField()

    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class RestaurantLayout(models.Model):
    position = models.JSONField()

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)