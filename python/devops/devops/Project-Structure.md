devops_portfolio/
├── portfolio/                  # Main Django app
│   ├── migrations/
│   ├── static/
│   │   ├── css/
│   │   ├── images/             # Place your profile image here
│   │   └── js/
│   ├── templates/
│   │   ├── portfolio/
│   │   │   ├── base.html       # Base template
│   │   │   ├── index.html      # Home page
│   │   │   ├── projects.html   # Projects page
│   │   │   └── contact.html    # Contact page
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py                # Contact form
│   ├── models.py               # Project and Skill models
│   ├── urls.py                 # App URLs
│   └── views.py                # View functions
├── portfolio_project/           # Project settings
│   ├── settings.py
│   ├── urls.py                 # Main URLs
│   └── wsgi.py
├── manage.py
├── requirements.txt
└── README.md