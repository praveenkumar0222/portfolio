document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const suffix = stat.textContent.includes('%') ? '%' : '';
        const duration = 2000; // Animation duration in ms
        const step = target / (duration / 16); // 60fps
        
        let current = 0;
        const increment = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(increment);
            } else {
                stat.textContent = target + suffix;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                increment();
                observer.unobserve(stat);
            }
        });
        
        observer.observe(stat);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            
            // Simulate form submission
            submitBtn.querySelector('span').textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.querySelector('span').textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #00b8ff, #001eff)';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(45deg, var(--primary), var(--secondary))';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Create network graph for skills visualization
    createSkillsGraph();
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-info, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

function createSkillsGraph() {
    const container = document.getElementById('skillsGraph');
    if (!container) return;
    
    // Sample data for skills graph
    const skillsData = {
        nodes: [
            { id: 1, name: 'DevOps', group: 1, size: 25 },
            { id: 2, name: 'AWS', group: 2, size: 20 },
            { id: 3, name: 'Azure', group: 2, size: 18 },
            { id: 4, name: 'GCP', group: 2, size: 16 },
            { id: 5, name: 'Docker', group: 3, size: 22 },
            { id: 6, name: 'Kubernetes', group: 3, size: 22 },
            { id: 7, name: 'Terraform', group: 4, size: 21 },
            { id: 8, name: 'Ansible', group: 4, size: 18 },
            { id: 9, name: 'Jenkins', group: 5, size: 20 },
            { id: 10, name: 'GitHub Actions', group: 5, size: 18 },
            { id: 11, name: 'GitLab CI', group: 5, size: 17 }
        ],
        links: [
            { source: 1, target: 2, value: 5 },
            { source: 1, target: 3, value: 4 },
            { source: 1, target: 4, value: 3 },
            { source: 1, target: 5, value: 5 },
            { source: 1, target: 6, value: 5 },
            { source: 1, target: 7, value: 5 },
            { source: 1, target: 8, value: 4 },
            { source: 1, target: 9, value: 5 },
            { source: 1, target: 10, value: 4 },
            { source: 1, target: 11, value: 4 },
            { source: 2, target: 5, value: 3 },
            { source: 2, target: 6, value: 4 },
            { source: 2, target: 7, value: 4 },
            { source: 3, target: 5, value: 3 },
            { source: 3, target: 6, value: 3 },
            { source: 3, target: 8, value: 3 },
            { source: 4, target: 5, value: 3 },
            { source: 4, target: 6, value: 3 },
            { source: 5, target: 9, value: 3 },
            { source: 5, target: 10, value: 3 },
            { source: 5, target: 11, value: 3 },
            { source: 6, target: 7, value: 3 },
            { source: 7, target: 8, value: 3 }
        ]
    };
    
    // Create SVG container
    const width = container.clientWidth;
    const height = container.clientHeight;
    const svg = d3.select(container).append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create simulation
    const simulation = d3.forceSimulation(skillsData.nodes)
        .force('link', d3.forceLink(skillsData.links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-500))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => d.size + 5));
    
    // Create links
    const link = svg.append('g')
        .selectAll('line')
        .data(skillsData.links)
        .enter().append('line')
        .attr('stroke', 'rgba(0, 255, 157, 0.3)')
        .attr('stroke-width', d => Math.sqrt(d.value));
    
    // Create nodes
    const node = svg.append('g')
        .selectAll('g')
        .data(skillsData.nodes)
        .enter().append('g')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // Add circles to nodes
    node.append('circle')
        .attr('r', d => d.size)
        .attr('fill', d => {
            const colors = ['#00ff9d', '#00b8ff', '#001eff', '#ff00e0', '#ff7b00'];
            return colors[d.group - 1];
        })
        .attr('opacity', 0.8)
        .attr('stroke', '#fff')
        .attr('stroke-width', 1);
    
    // Add text to nodes
    node.append('text')
        .attr('dy', 4)
        .attr('text-anchor', 'middle')
        .text(d => d.name)
        .attr('fill', '#fff')
        .attr('font-size', d => d.size / 2)
        .attr('font-weight', 'bold');
    
    // Update positions on simulation tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    // Drag functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    
    // Zoom functionality
    const zoom = d3.zoom()
        .scaleExtent([0.5, 2])
        .on('zoom', (event) => {
            svg.attr('transform', event.transform);
        });
    
    svg.call(zoom);
}