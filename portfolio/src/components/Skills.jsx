import React from 'react';

const Skills = () => {
  // CHANGE YOUR SKILLS HERE
  const skills = [
    { name: 'AWS/GCP/Azure', level: 90 },
    { name: 'Kubernetes', level: 85 },
    { name: 'Docker', level: 90 },
    { name: 'Terraform', level: 88 },
    { name: 'Ansible', level: 80 },
    { name: 'CI/CD Pipelines', level: 92 },
    { name: 'Python/Bash', level: 85 },
    { name: 'Monitoring & Logging', level: 87 },
    { name: 'Linux Administration', level: 90 },
    { name: 'Git/GitHub/GitLab', level: 95 },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;