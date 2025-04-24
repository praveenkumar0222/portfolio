from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=80)  # Percentage
    category = models.CharField(max_length=50, choices=[
        ('devops', 'DevOps'),
        ('cloud', 'Cloud'),
        ('automation', 'Automation'),
        ('monitoring', 'Monitoring'),
        ('other', 'Other')
    ])
    icon = models.CharField(max_length=50, help_text="Font Awesome icon class")
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=200)
    image = models.ImageField(upload_to='project_images/', blank=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    date_completed = models.DateField()
    featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title