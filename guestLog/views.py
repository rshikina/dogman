from urllib import request
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import SubmitTitle
from django.views import generic
from .models import SinglePost
from .forms import AddPostForm
from django.urls import reverse
from django.urls import reverse_lazy
from datetime import datetime




def index(request):
    titles_list = SinglePost.objects.order_by("-pubdate")[:5]
    context = {"titles_list": titles_list}
    return render(request, "guestLog/index.html", context)

#show list of all posts
class PostViewList(generic.ListView):
    template_name = "guestLog/post_list.html"
    model = SinglePost
    context_object_name = "post_list"
    
#add a post
def add_post(request):
    if request.method == 'POST':
        print("hello")
        form = AddPostForm(request.POST)
        if form.is_valid():
            newPost = SinglePost(post_text = form.cleaned_data['post_text'])
            newPost.pubdate = datetime.now()
            newPost.save()
            return HttpResponseRedirect(reverse('guestLog:posts'))
    else:
        form = AddPostForm()

    context = {
        'form': form,
    }

    return render(request, 'guestLog/add_post.html', context)

def htmlPractice(request):
    return render(request, 'guestLog/htmlPractice.html')
    