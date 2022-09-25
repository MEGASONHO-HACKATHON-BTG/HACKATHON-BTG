from django.shortcuts import render

# Create your views here.
def dashboard(request):

    return render(request, 'dashboard.html')

def invest(request):

    return render(request, 'invest.html')

def new_share(request):

    return render(request, 'new_share.html')

def redirect(request):

    return render(request, 'redirect.html')

def data_confirm(request):

    return render(request, 'data_confirm.html')