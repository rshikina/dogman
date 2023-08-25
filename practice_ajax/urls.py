from django.urls import path, include
from .views import *


app_name="practiceAjax"
urlpatterns = [
    path('', some_method.as_view()),
]