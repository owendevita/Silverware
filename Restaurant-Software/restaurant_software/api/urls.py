from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


# The API URLs are now determined automatically by the router.
urlpatterns = [
    # Restaurant URLs
    path('restaurants/', views.restaurants_list, name='restaurants_list'),
    path('restaurants/<int:pk>/', views.restaurant_details, name='restaurant_details'),
    path('restaurants/<int:restaurant_pk>/menus/', views.restaurant_menu_list, name='restaurant_menu_list'),
    path('restaurants/<int:restaurant_pk>/employees/', views.restaurant_employee_list, name='restaurant_employee_list'),
    path('restaurants/<int:restaurant_pk>/orders/', views.restaurant_order_list, name='restaurant_order_list'),
    path('restaurants/<int:restaurant_pk>/layouts/', views.restaurant_layout_list, name='restaurant_layout_list'),

    # Employee URLs
    path('create/employee/', views.create_employee, name='create_employee'),
    path('employees/<int:pk>/', views.employee_details, name='employee_details'),

    #Login / Authentication URLS
    path('login/', views.login, name='login'),
    path('token/info/', views.get_token_info, name='get_token_info'),

    # Menu URLs
    path('create/menu/', views.create_menu, name='create_menu'),
    path('menus/<int:pk>/', views.menu_details, name='menu_details'),

    # Order URLs
    path('create/order', views.create_order, name='create_order'),
    path('orders/<int:pk>/', views.order_details, name='order_details'),

    # Restaurant Layout URLs
    path('create/layout', views.create_layout, name='create_layout'),
    path('layouts/<int:pk>/', views.layout_details, name='layout_details'),
]
