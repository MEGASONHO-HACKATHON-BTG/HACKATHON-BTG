from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path, include, reverse

def index(request):
    return redirect(reverse('megasonho:invest'))

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('megasonho/', include('apps.dashboard.urls', namespace='megasonho'))
]
