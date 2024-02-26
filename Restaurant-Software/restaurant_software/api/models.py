from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=35)

class Employee(models.Model):
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    employee_id = models.PositiveIntegerField(unique=True)

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Menu(models.Model):
    items = models.JSONField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

class Order(models.Model):
    table_number = models.PositiveSmallIntegerField()
    items = models.JSONField()
    complete = models.BooleanField()

    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
