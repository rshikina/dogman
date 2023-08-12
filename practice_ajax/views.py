from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from time import time
# Create your views here.

class some_method(View):
    # print("Inside method in views.py from ajax.urls.py from gettingstarted.urls.py")
    def get(self, request):
        text = request.GET.get('button_text')

        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            t = time()
            return JsonResponse({'seconds': t}, status=200)
        else:
           return render(request, 'practice_ajax/index.html')

    def post(self, request):
        card_text = request.POST.get('forDatabase')
        result = f"I've got: {card_text}"
        return JsonResponse({'data': result}, status=200)

