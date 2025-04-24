import React from 'react';

const Experience = () => {
  // CHANGE YOUR EXPERIENCE HERE
  const experiences = [
    {
      role: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2021 - Present',
      responsibilities: [
        'Designed and implemented CI/CD pipelines reducing deployment time by 70%',
        'Managed Kubernetes clusters serving 500+ microservices',
        'Automated infrastructure provisioning with Terraform across AWS and GCP',
        'Implemented monitoring and alerting system reducing incident response time'
      ]
    },
    {
      role: 'DevOps Engineer',
      company: 'Cloud Innovations',
      period: 'Mar 2018 - Dec 2020',
      responsibilities: [
        'Migrated on-premise infrastructure to AWS saving $200k annually',
        'Containerized legacy applications improving deployment efficiency',
        'Implemented infrastructure as code practices using Terraform and Ansible'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Work Experience</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="md:flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-gray-600 rounded-full text-sm">
                  {exp.period}
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;