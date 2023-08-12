from django.contrib import admin

# Register your models here.

# Register your models here.
from .models import MathProblem, MathProblemManager, Person

admin.site.register(MathProblem)
admin.site.register(Person)