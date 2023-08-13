from django.shortcuts import render
from django.http import HttpResponse

def landingIndex(request):
    return HttpResponse("Landing Page!")

