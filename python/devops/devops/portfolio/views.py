from django.shortcuts import render
from .models import Skill, Project
from .forms import ContactForm

def home(request):
    skills = Skill.objects.all()
    featured_projects = Project.objects.filter(featured=True)[:3]
    return render(request, 'portfolio/index.html', {
        'skills': skills,
        'featured_projects': featured_projects
    })

def projects(request):
    all_projects = Project.objects.all().order_by('-date_completed')
    return render(request, 'portfolio/projects.html', {
        'projects': all_projects
    })

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Here you would typically send an email
            # For simplicity, we'll just print to console
            print(f"New contact from {form.cleaned_data['name']}")
            return render(request, 'portfolio/contact.html', {
                'form': ContactForm(),
                'success': True
            })
    else:
        form = ContactForm()
    
    return render(request, 'portfolio/contact.html', {
        'form': form,
        'success': False
    })