from django.urls import path

from . import views


app_name = "guestLog"

urlpatterns = [
    path("", views.index, name="index"),
    path("post/", views.PostViewList.as_view(), name='posts'),
    path("post/addnew", views.add_new_post, name='add_post'),
]
