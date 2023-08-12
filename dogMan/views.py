from django.http import HttpResponse


def home(request):
    return HttpResponse("<h1>You made it the landing page.</h1>")

