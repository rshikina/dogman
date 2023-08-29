from django.urls import path

from . import views


app_name = "guestLog"

urlpatterns = [
    path("", views.index, name="index"),
    path("addpost/", views.add_post, name='add_post'),
    path("posts/", views.PostViewList.as_view(), name='posts'),
    path("html_practice/", views.htmlPractice, name="html"),
]
