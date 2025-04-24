import React from 'react';

const Projects = () => {
  // CHANGE YOUR PROJECTS HERE
  const projects = [
    {
      title: 'Cloud Migration Strategy',
      description: 'Led migration of enterprise applications from on-premise to AWS, implementing auto-scaling and cost optimization.',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Ansible'],
      link: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Designed and implemented GitOps workflow with ArgoCD and GitHub Actions for 50+ microservices.',
      technologies: ['ArgoCD', 'GitHub Actions', 'Helm', 'Kubernetes'],
      link: '#'
    },
    {
      title: 'Infrastructure Monitoring System',
      description: 'Built centralized monitoring with Prometheus, Grafana and ELK stack for hybrid cloud environment.',
      technologies: ['Prometheus', 'Grafana', 'ELK', 'Python'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Key Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;