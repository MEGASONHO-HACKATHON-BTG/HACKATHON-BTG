from django.urls import path

from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('invest/', views.invest, name='invest'),
    path('new-share/', views.new_share, name='new_share'),
    path('redirect/', views.redirect, name='redirect'),
    path('data_confirm/', views.data_confirm, name='data_confirm'),
]
