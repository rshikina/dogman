from django.shortcuts import render
from django.http import HttpResponse
from .models import Greeting
import os
import requests
from django.views.generic import View
from django.http import JsonResponse
from time import time
from .models import *
import time


#This is for one redirect example
from django.shortcuts import redirect


# Create your views here.
class statsClass(View):

    
    def get(self, request):

        return render(request, "hello/index.html")

    def post(self, request):

        # localtime = time.localtime(time.time())
        # get_period = str(localtime[4])
        # record_attempts = request.session.get('record_attempts', 0)
        # period_key = request.session.get('period', get_period)
        # request.session['period'] = get_period
        # request.session['record_attempts'] = record_attempts
        # num_correct = request.session.get('num_correct', 0)
        # num_wrong = request.session.get('num_wrong', 0)
        # request.session['num_wrong'] = num_wrong
        # request.session['num_correct'] = num_correct

        # if (period_key != str(localtime[4])):
        #     request.session['period'] = str(localtime[4])
        #     request.session['record_attempts'] = 0
        #     record_attempts = 0
        #     request.session['num_correct'] = 0
        #     request.session['num_wrong'] = 0
        #     num_wrong = 0
        #     num_correct = 0



        #increment the number of attempts, store in sessions variable
        # record_attempts += 1
        # request.session['record_attempts'] = record_attempts

        # getCheck = request.POST.get('correctOrNot')
        # print("Check results: ", getCheck)
        # if(int(getCheck) == 1):
        #     num_correct += 1
        # else:
        #     num_wrong += 1

        # request.session['num_correct'] = num_correct
        # request.session['num_wrong'] = num_wrong


        #############################
        # use the variables 'record_attempts' for the number of tries in a period
        # 'period' for the period that you are measuring, such as day or hour.
        # select day or hour with localtime[x], where x is 4 for minute, 3 for hour, and 2 for day
        # useage: record_attempts holds the number of tries in the given period.
        # send 'record_attempts' back to the JS to show the stats of how many attempts user made.



        
        # # get the problem from the javascript
        # saveProblem = request.POST.get('getProblem')
        # problem = MathProblem.objects.create_problem(saveProblem)
        # problem.save()
        
        # last_entered = MathProblem.objects.last().__str__()
        





    #     context = {
    #         'attempts': record_attempts,
    #         'correct': num_correct,
    #         'wrong': num_wrong,
    #    }


        context = {
            'attempts': "zero",
            'correct': "one",
            'wrong': "two"
        }

        # print("Down to here")
        return JsonResponse(context, status=200)

