from django.shortcuts import render
import json

def index(request):
    with open('ejercicios/ejercicios.json', encoding='utf-8') as json_file:
        context = json.load(json_file)
    return render(request, 'index.html', context)

def ejercicio(request, num):
    return render(request, 'ejercicio{}.html'.format(num))