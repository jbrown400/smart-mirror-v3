from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# def index(request):
#     template = loader.get_template('page/index.html')
#     return HttpResponse(template.render(request))

def index(request):
    return render(request, 'page/index.html')