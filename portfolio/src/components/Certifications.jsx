import React from 'react';

const Certifications = () => {
  // CHANGE YOUR CERTIFICATIONS HERE
  const certifications = [
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: '/aws-badge.png'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      badge: '/cka-badge.png'
    },
    {
      name: 'Google Cloud Professional DevOps Engineer',
      issuer: 'Google Cloud',
      date: '2021',
      badge: '/gcp-badge.png'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <img src={cert.badge} alt={cert.name} className="h-24 w-24 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">{cert.name}</h3>
              <p className="text-gray-300 mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;