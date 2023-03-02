from django.shortcuts import render
import json

with open('ejercicios/ejercicios.json', encoding='utf-8') as json_file:
    ejercicios = json.load(json_file)

def index(request):
    context = ejercicios
    return render(request, 'index.html', context)

def ejercicio(request, num):
    desc = ejercicios['ejercicios'][num - 1]['desc']

    context = {
        'num' : num,
        'desc' : desc
    }
    return render(request, 'ejercicio.html', context)