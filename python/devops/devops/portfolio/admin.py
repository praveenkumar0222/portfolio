from django.contrib import admin
from .models import Skill, Project

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'order')
    list_editable = ('order',)
    list_filter = ('category',)
    search_fields = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_completed', 'featured')
    list_filter = ('featured', 'date_completed')
    search_fields = ('title', 'technologies')
    date_hierarchy = 'date_completed'