from django.http import HttpResponse
from django.shortcuts import redirect
from ../ import views

def goHome(request):
    return redirect(home)

