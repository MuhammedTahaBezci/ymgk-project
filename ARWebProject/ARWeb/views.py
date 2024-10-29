from django.shortcuts import render

def index(request):
    return render(request,'../templates/ARWebProject/index.html')

def login_view(request):
    return render(request, '../templates/ARWebProject/login.html')
