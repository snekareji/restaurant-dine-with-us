from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'index.html')

def veg(request):
    return render(request,'veg.html')

def nonveg(request):
    return render(request,'non-veg.html')

def icecream(request):
    return render(request,'ice-cream.html')

def milkshake(request):
    return render(request,'milkshake.html')

def juice(request):
    return render(request,'juice.html')

def cake(request):
    return render(request,'cake.html')

def contact(request):
    return render(request,'contact.html')

def payment(request):
    return render(request,'payment.html')