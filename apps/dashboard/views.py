import requests
from django.shortcuts import render

from django.urls import reverse
from django.shortcuts import redirect

from . import views

app_name = 'dashboard'

# ROTAS OPENFINANCE

def teste(request):
    return redirect(reverse('megasonho:redirect_page'))

# Create your views here.
def dashboard(request):

    return render(request, 'dashboard.html')

def invest(request):

    return render(request, 'invest.html')

def new_share(request):

    return render(request, 'new_share.html')

def redirect_page(request):

    return render(request, 'redirect.html')

def data_confirm(request):

    url = 'https://challenge.hackathonbtg.com/customers/v1/personal/identifications'

    headers_payload = {
        'organizationid': '69665991-da55-4aac-a1f2-32d23daba8fe',
        'customerid': '595.080.896-84'
    }

    r = requests.get(url, headers=headers_payload)

    r_payload = r.json()

    payload = r_payload['data'][0]

    dd = payload['contacts']['phones'][0]['areaCode']
    phone = payload['contacts']['phones'][0]['number']

    address_payload = payload['contacts']['postalAddresses'][0]

    address = address_payload['address']
    townName = address_payload['townName']
    districtName = address_payload['districtName']

    user = {
        'document': payload['documents']['cpfNumber'],
        'phone': f'({dd}) {phone}',
        'email': payload['contacts']['emails'][0]['email'],
        'address': f'{address} {townName} {districtName}',
        'state': address_payload['countrySubDivision'],
    }

    context = {
        'user': user
    }

    print(user)

    #print(r.json())

    return render(request, 'data_confirm.html', context)

def bonus(request):

    return render(request, 'bonus.html')

def confirm(request):

    return render(request, 'confirm.html')