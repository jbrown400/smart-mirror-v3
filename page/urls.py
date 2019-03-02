from django.conf.urls import url
from page import views

app_name = 'page'
urlpatterns = [
    url(r'^$', views.index, name='index'),
]
