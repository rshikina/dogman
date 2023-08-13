from django.urls import path, include
from . import views

app_name="hello"
urlpatterns = [
    path('', views.statsClass.as_view(), name='index'),
    path("db/", views.db, name="db"),
    path("sessions/", views.create_session, name='sessions'),
    path("stats/", views.stats, name='stats'),
    path('stats-test/', views.stats_test, name="testStats"),  
    path('tictactoe/', views.tictactoe, name='tictactoe'),
    path('bubbleShooter/', views.bubbleShooter, name = 'bubbleshooter'),
    #path('contents/', views.contents, name = "contents"),
]
