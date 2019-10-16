"""dispatrace URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from .views import IndexView, bad_request
from django.conf.urls import handler404
handler404 = bad_request


admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView, name="index"),
    re_path(r'^(?P<path>.*)/$', IndexView, name="index2"),
]

if settings.DEBUG:
    import os
    from django.views.generic.base import RedirectView
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += static(settings.MEDIA_URL + 'uploads/', document_root=os.path.join(settings.MEDIA_ROOT, 'uploads'))