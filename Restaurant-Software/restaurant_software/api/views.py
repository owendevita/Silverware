from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Restaurant, Employee, Menu, Order, RestaurantLayout
from .serializers import (
    RestaurantSerializer,
    EmployeeSerializer,
    MenuSerializer,
    OrderSerializer,
    RestaurantLayoutSerializer
)

# Restaurant views
@api_view(['GET', 'POST'])
def restaurants_list(request):
    if request.method == 'GET':
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def restaurant_details(request, pk):
    try:
        restaurant = Restaurant.objects.get(pk=pk)
    except Restaurant.DoesNotExist:
        return Response({'error' : 'Restaurant not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RestaurantSerializer(restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        restaurant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def restaurant_menu_list(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExit:
        return Response({'error' : 'Restaurant not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    menus = restaurant.menu_set.all()
    serializer = MenuSerializer(menus, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def restaurant_employee_list(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExit:
        return Response({'error' : 'Restaurant not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    employees = restaurant.employee_set.all()
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def restaurant_order_list(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExit:
        return Response({'error' : 'Restaurant not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    orders = restaurant.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def restaurant_layout_list(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExit:
        return Response({'error' : 'Restaurant not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    layouts = restaurant.restaurantlayout_set.all()
    serializer = RestaurantLayoutSerializer(layouts, many=True)
    return Response(serializer.data)

# Employee Views
@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def employee_details(request, pk):
    
    try:
        employee = Employee.objects.get(pk=pk)
    except Employee.DoesNotExist:
        return Response({'error' : 'Employee not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Menu Views
@api_view(['POST'])
def create_menu(request):
    if request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def menu_details(request, pk):
    try:
        menu = Menu.objects.get(pk=pk)
    except Menu.DoesNotExist:
        return Response({'error' : 'Menu not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = MenuSerializer(menu)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MenuSerializer(menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
# Order Views
@api_view(['POST'])
def create_order(request):
    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def order_details(request, pk):
    try:
        order = Order.objects.get(pk=pk)
    except Order.DoesNotExist:
        return Response({'error' : 'Order not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Layout Views
@api_view(['POST'])
def create_layout(request):
    if request.method == 'POST':
        serializer = RestaurantLayoutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def layout_details(request, pk):
    try:
        layout = RestaurantLayout.objects.get(pk=pk)
    except RestaurantLayout.DoesNotExist:
        return Response({'error' : 'Layout not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = RestaurantLayoutSerializer(layout)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RestaurantLayoutSerializer(layout, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        layout.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
