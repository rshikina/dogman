from django.urls import path, include
from .views import *

urlpatterns = [
    path('', dbMethod.as_view()),
    # path('', sayHello)
]