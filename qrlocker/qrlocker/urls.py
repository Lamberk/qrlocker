"""qrlocker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token

from qrlocker.qr.views import QRView
from qrlocker.task.views import TaskViewSet
from qrlocker.auth.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'^users', UserViewSet)
router.register(r'^tasks', TaskViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-verify/', verify_jwt_token),
    url(r'^qr/', QRView.as_view())
    # url(r'^auth/', include('qrlocker.auth.urls')),
]

urlpatterns += router.urls