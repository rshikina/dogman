
from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting
import os
# import requests


from django.views.generic import View
from django.http import JsonResponse
from .models import *
import time

#This is for one redirect example


from django.shortcuts import redirect


# Create your views here.




class statsClass(View):
    period_length = 3 #2 for days, 3 for hour, 4 for minutes, so on
    
    def get(self, request):
    #   record_attempts = request.session.get('record_attempts', 0)
    #   num_correct = request.session.get('num_correct', 0)
    #   num_wrong = request.session.get('num_wrong', 0)

    #   context = {
    #      'attempts': record_attempts,
    #      'correct': num_correct,
    #      'wrong': num_wrong,
    #      }
    #         # print("Down to here")
    #   return JsonResponse(context, status=200)

        return render(request, "hello/index.html")

    def post(self, request):

        getCheck = request.POST.get('correctOrNot')
        record_attempts = request.session.get('record_attempts', 0) #if no attempts made, var will be zero.

        if (int(getCheck) == 0 and record_attempts == 0): #if no attempts made, return zero and print message about no attempts made.
            context = {
              'attempts': 0
            }
            return JsonResponse(context, status=200)

            
        else: 
            set_period = '%H'   #set time period here
            localtime = time.strftime(set_period)
            record_attempts = request.session.get('record_attempts', 0)
            period_key = request.session.get('period', localtime)
            request.session['period'] = period_key
            request.session['record_attempts'] = record_attempts
            num_correct = request.session.get('num_correct', 0)
            num_wrong = request.session.get('num_wrong', 0)
            request.session['num_wrong'] = num_wrong
            request.session['num_correct'] = num_correct

            if (period_key != time.strftime(set_period)):
                  request.session['period'] = time.strftime(set_period)    
                  request.session['record_attempts'] = 0
                  record_attempts = 0 #RESET count if starting a new period
                  request.session['num_correct'] = 0
                  request.session['num_wrong'] = 0
                  num_wrong = 0
                  num_correct = 0

            if(int(getCheck) != 0):

                #increment the number of attempts, store in sessions variable
                record_attempts += 1
                request.session['record_attempts'] = record_attempts

                print("Check results: ", getCheck)
                if(int(getCheck) == 1):
                    num_correct += 1
                else:
                    num_wrong += 1

            request.session['num_correct'] = num_correct
            request.session['num_wrong'] = num_wrong


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
            
            context = {
                  'attempts': record_attempts,
                  'correct': num_correct,
                  'wrong': num_wrong,
            }
            # print("Down to here")
        return JsonResponse(context, status=200)



def index(request):

    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

   

    context = {
        'num_visits': num_visits,
    
    }
    # return HttpResponse('Hello from Python!')
    return render(request, "hello/index.html", context = context)
    # times = int(os.environ.get('TIMES', 3))
    # return HttpResponse('Hello! ' * times)

    # r = requests.get('https://httpbin.org/status/418')
    # print(r.text)
    # return HttpResponse('<pre>' + r.text + '</pre>')


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "hello/db.html", {"greetings": greetings})


 
def stats(request):

    
    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1
    numProblems = request.session.get('number_of_problems', 0)

    context = {
        'num_visits': num_visits,
        'numProblems': numProblems,
    
    }

    request.session['number_of_problems'] = numProblems + 1

    return render(request, 'hello/stats.html', context)

#left over garbage from practice. leaving it here as reminder for how to use sessions.

def stats_test(request):
    context = {}
    return render(request, 'hello/stats_test.html', context)

def create_session(request):
    request.session['first_name'] = 'Tetris'
    request.session['Number'] = '3'
    return HttpResponse("<h1>Welcome! The session is set.</h1>")

def access_session(request):
    response = "<h1>Welcome to the portal</h1>"
    if request.session.get('Game'):
        response += "Game name: {0}<br>".format(request.session.get('Game'))
        return HttpResponse(response)
    else:
        return redirect('/create/')    

def tictactoe(request):
    return render(request, 'hello/tictactoe.html')

def bubbleShooter(request):
    # return render(request, 'hello/bubbleshooter.html')
   return render(request, 'hello/bubblegame/bubbleshooter.html')

# def contents(request):
#    return render(request, 'hello/table_contents.html')
