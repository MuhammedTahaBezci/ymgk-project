from . import views
from django.urls import path

app_name="ARWeb"

urlpatterns = [
    path('home/',views.index, name='home')
]