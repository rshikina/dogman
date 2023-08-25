from urllib import request
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import SubmitTitle
from django.views import generic
from .models import SmallPost
from .forms import AddPostForm
from django.urls import reverse



def index(request):
    titles_list = SubmitTitle.objects.order_by("-pub_date")[:10]
    context = {"titles_list": titles_list}
    return render(request, "guestLog/index.html", context)

class PostViewList(generic.ListView):
    model = SmallPost
    context_object_name = "post_list"
    

def add_new_post():
    if request.method == 'POST':
        form = AddPostForm(request.POST)
        if form.is_valid():
            newPost = SmallPost(small_post = form.cleaned_data['new_post'])
            newPost.save()
            return HttpResponseRedirect(reverse('posts'))
        else:
            form = AddPostForm(initial={'new_post': "Type in your post"})

    context = {
        'form': form,
    }

    return render(request, 'smallpost_list.html', context)