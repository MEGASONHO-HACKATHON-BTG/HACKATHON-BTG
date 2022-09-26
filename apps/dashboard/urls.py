from django.urls import path, reverse
from django.shortcuts import redirect

from . import views

app_name = 'dashboard'

# ROTAS OPENFINANCE

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('invest/', views.invest, name='invest'),
    path('new-share/', views.new_share, name='new_share'),
    path('redirect/', views.redirect_page, name='redirect_page'),
    path('data_confirm/', views.data_confirm, name='data_confirm'),
    path('bonus/', views.bonus, name='bonus'),
    path('confirm/', views.confirm, name='confirm'),
]
