from django.urls import path, include
from .views import *

urlpatterns = [
    path('', some_method.as_view()),
]