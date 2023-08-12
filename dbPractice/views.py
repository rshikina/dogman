from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from time import time
from .models import *
import time

# Import date class from datetime module
from datetime import date

# Create your views here.
 
class dbMethod(View):

    def get(self, request):

        return render(request, "dbPractice/index.html")

    def post(self, request):

        localtime = time.localtime(time.time())
        get_period=str(localtime[4])

        record_attempts = request.session.get('record_attempts', 0)
        period_key = request.session.get('period', get_period)
        request.session['period'] = get_period
        print(record_attempts)
        request.session.modified = True

        print("Period: ", period_key, " and time: ", str(localtime[4]))

        request.session.modified = True

        if (period_key != str(localtime[4])):
            print("Inside reset: ", str(request.session['record_attempts']))

            request.session['period'] = str(localtime[4])
            request.session['record_attempts'] = 0
            record_attempts = 0
        print(request.session.keys())

        
        #increment the number of attempts, store in sessions variable
        # attempts_as_num = int(request.session['record_attempts'])
        # attempts_as_num += 1
        # request.session['record_attempts'] = str(attempts_as_num)
        
        request.session['record_attempts'] = record_attempts + 1
        record_attempts = request.session['record_attempts']
        print("variable: ", record_attempts)

        #############################
        # use the variables 'record_attempts' for the number of tries in a period
        # 'period' for the period that you are measuring, such as day or hour.
        # select day or hour with localtime[x], where x is 4 for minute, 3 for hour, and 2 for day
        # useage: record_attempts holds the number of tries in the given period.
        # send 'record_attempts' back to the JS to show the stats of how many attempts user made.





        # today = str(date.today())
        # visit_today = request.session.get('visit_today', today)

        # # write to the session
        # if (today != visit_today):
        #     request.session['visit_today'] = today

        # print(visit_today)

        # sample = request.session.get((['visit_today']['attempts']), 'filled sample')
        # request.session(['visit_today']['attempts']) = "1"
        # request.session['foo']['bar'] = 'baz'

        # request.session['visit_today'] = 'helo'
        # OKAY I"M STUCK HERE>>>> trying to figure out how to use session to record how many problems done
        # by browser session. also want to record how many problems done by browser session by day



        # get the problem from the javascript
        setProblem = request.POST.get('getProblem')
        problem = MathProblem.objects.create_problem(setProblem)
        problem.save()
        
        one_entry = MathProblem.objects.last().__str__()
        
        # request.session['visit_today']['num_problems'] = "boo"
        # Set session as modified to force data updates/cookie to be saved.
        # request.session.modified = True



        print(one_entry)
        # all_problems = MathProblem.objects.all()
        count = MathProblem.objects.all().count()
        context = {
            'getProblem': one_entry,
            'count': count,
            'attempts': record_attempts,
        }
        # return JsonResponse({'data': one_entry.__str__()}, status=200)
        # return JsonResponse(context, status=200)
        return JsonResponse(context, status=200)




        # card_text = "hello hello"
        # # card_text = request.POST.get('text')
        # result = f"I've got: {card_text}"
        # switchCheck = request.POST.get('switch')
        # if (switchCheck == "True"):
        #     result = "t"
        #     return JsonResponse({'data': MathProblem.objects.all().__str__()})
        # else:
        #     result = "You've got false"
        #     return JsonResponse({'data': result}, status=200)

        # return render(request, "hello/db.html", {"greetings": greetings})
        # return JsonResponse({'data': result}, status=200)



def runTest(request):
    return render(request, 'dbPractice/test.html')

def sayHello(request):
    quote = "Hi!"
    print("hello, this inside sayHello")
    return render(request, "dbPractice/index.html", {'sayHello': quote})

def sayGoodbye(request):
    quote = "Goodbye!"
    print("goodbye!")
    return render(request, "dbPractice/index.html", {'sayHello': quote})

    
