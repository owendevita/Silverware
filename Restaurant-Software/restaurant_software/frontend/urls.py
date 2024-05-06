from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('manage-layouts/', index),
    path('layouts/', index),
    path('login/', index),
    path('waitlist/', index),
    path('orders/', index),
    path('create-order/', index),
    path('manage-employees/', index),
    path('manage-restaurants', index),
    path('menu/', index),
    path('manage-menus/', index),
    path('settings', index)
]
