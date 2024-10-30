from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from firebase_admin import db
from datetime import datetime
from django.shortcuts import redirect, render
from django.contrib import messages


def index(request):
    if "user_id" in request.session:
        context = {"session_active": True}
    else:
        context = {"session_active": False}

    return render(request, "../templates/ARWebProject/index.html", context)


def login_view(request):
    if "user_id" in request.session:
        return HttpResponseRedirect("http://127.0.0.1:8000/home")

    if request.method == "POST":
        mail = request.POST.get("email")
        sifre = request.POST.get("sifre")

        ref = db.reference("users")
        data = ref.get()

        if data:
            for key, value in data.items():
                if value["mail"] == mail and value["password"] == sifre:
                    request.session["user_id"] = key
                    return HttpResponseRedirect("http://127.0.0.1:8000/home")

        messages.error(request, "Geçersiz mail veya şifre.")

    return render(request, "../templates/ARWebProject/login.html")

def logout_view(request):
    request.session.flush()
    previous_page = request.META.get("HTTP_REFERER", "/")
    return redirect(previous_page)


def check_date_format(date_string):
    try:
        datetime.strptime(date_string, "%d/%m/%Y")
        return True
    except ValueError:
        return False


# kayit ol fonksiyonu
def register_view(request):
    if request.method == "POST":
        isim = request.POST.get("isim")
        soyisim = request.POST.get("soyisim")
        dogumTarihi = request.POST.get("dogumTarihi")
        mail = request.POST.get("email")
        sifre = request.POST.get("sifre")
        sifreDogrulama = request.POST.get("sifreDogrulama")
        if check_date_format(dogumTarihi):
            if sifre == sifreDogrulama:
                try:
                    ref = db.reference("users")
                    ref.push(
                        {
                            "name": isim,
                            "surname": soyisim,
                            "dateOfBirth": dogumTarihi,
                            "mail": mail,
                            "password": sifre,
                        }
                    )
                    return HttpResponseRedirect("http://127.0.0.1:8000/register")
                except Exception as e:
                    pass
            else:
                messages.error(request, "Şifre ve doğrulama şifresi aynı olmalıdır.")
        else:
            messages.error(request, "Doğum tarihinizi GG/AA/YYYY olacak şekilde girin.")

    return render(request, "../templates/ARWebProject/register.html")
