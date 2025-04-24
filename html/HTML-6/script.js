document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Generate server rack
    const serverRack = document.getElementById('serverRack');
    const serverLabels = ['CI/CD', 'K8s', 'Cloud', 'Docker', 'Terraform', 'AWS', 'Azure', 'Monitoring'];
    
    for (let i = 0; i < 8; i++) {
        const server = document.createElement('div');
        server.className = 'server';
        
        // Position servers in a 3D space
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 150;
        const z = Math.sin(angle) * 150;
        
        server.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${angle}rad)`;
        
        // Add server lights
        for (let j = 0; j < 3; j++) {
            const light = document.createElement('div');
            light.className = 'server-light';
            if (j === 1) light.style.animationDelay = `${i * 0.2}s`;
            server.appendChild(light);
        }
        
        // Add server label
        const label = document.createElement('div');
        label.className = 'server-label';
        label.textContent = serverLabels[i];
        server.appendChild(label);
        
        serverRack.appendChild(server);
    }
    
    // Add mousemove effect to server rack
    serverRack.addEventListener('mousemove', (e) => {
        const rect = serverRack.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        serverRack.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        
        const servers = document.querySelectorAll('.server');
        servers.forEach((server, i) => {
            const distance = Math.sqrt(
                Math.pow(x - (centerX + parseFloat(server.style.transform.match(/translate3d\(([^,]+)/)[1])), 2) +
                Math.pow(y - (centerY + parseFloat(server.style.transform.match(/,[^,]+,[^)]+\)/)[0].split(',')[1])), 2)
            );
            
            const scale = 1 + (1 - Math.min(distance / 300, 1)) * 0.5;
            server.style.transform = server.style.transform.replace(/scale\([^)]+\)/, '') + ` scale(${scale})`;
        });
    });
    
    serverRack.addEventListener('mouseleave', () => {
        serverRack.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        const servers = document.querySelectorAll('.server');
        servers.forEach(server => {
            server.style.transform = server.style.transform.replace(/scale\([^)]+\)/, '');
        });
    });
    
    // Terminal typing effect
    const terminalLines = [
        "> whoami",
        "DevOps Engineer with [X] years of experience in cloud infrastructure, CI/CD pipelines, and automation.",
        "> skills",
        "Proficient in AWS, Azure, Kubernetes, Docker, Terraform, Ansible, Jenkins, and more.",
        "> contact",
        "Available for freelance projects and full-time positions. Let's connect!"
    ];
    
    const terminal = document.getElementById('terminal');
    terminal.innerHTML = '';
    
    terminalLines.forEach((line, i) => {
        const lineElement = document.createElement('div');
        lineElement.className = 'terminal-line';
        lineElement.style.animationDelay = `${i * 0.5}s`;
        
        if (line.startsWith('>')) {
            lineElement.style.color = var(--primary);
            lineElement.style.fontWeight = 'bold';
        }
        
        lineElement.textContent = line;
        terminal.appendChild(lineElement);
    });
    
    // Skills cloud
    const skills = [
        'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 
        'Ansible', 'Jenkins', 'GitLab CI', 'GitHub Actions', 
        'Python', 'Bash', 'Linux', 'Helm', 'Prometheus', 
        'Grafana', 'ELK Stack', 'NGINX', 'Istio', 'Linkerd'
    ];
    
    const skillsCloud = document.querySelector('.skills-cloud');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        
        // Random size and color variation
        const size = Math.random() * 0.5 + 0.8;
        const hue = Math.floor(Math.random() * 60) + 180; // Blue-green range
        skillItem.style.fontSize = `${size}rem`;
        skillItem.style.color = `hsl(${hue}, 80%, 70%)`;
        
        skillsCloud.appendChild(skillItem);
    });
    
    // Projects
    const projects = [
        {
            title: 'Cloud Migration',
            description: 'Migrated legacy infrastructure to AWS with zero downtime using Terraform and Kubernetes.',
            tags: ['AWS', 'Terraform', 'K8s']
        },
        {
            title: 'CI/CD Pipeline',
            description: 'Designed and implemented a scalable CI/CD pipeline for microservices architecture.',
            tags: ['Jenkins', 'Docker', 'Helm']
        },
        {
            title: 'Monitoring System',
            description: 'Built a comprehensive monitoring solution with Prometheus and Grafana.',
            tags: ['Prometheus', 'Grafana', 'Alerting']
        }
    ];
    
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image"></div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
    
    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .terminal, .skill-item, .project-card, .info-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.section-title, .terminal, .skill-item, .project-card, .info-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});