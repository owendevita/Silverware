from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('tables/', index),
    path('login/', index),
    path('waitlist/', index)
]
