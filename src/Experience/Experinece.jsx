import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Propel Soft - BUTP Trichy',
      location: 'Trichy',
      title: 'FullStack Developer (Internship with Stipend)',
      duration: '2022-2023',
      description: 'As the lead UI developer at PropelSoft, I spearheaded research efforts and the implementation of cutting-edge technologies within the realm of user interface design. Demonstrating adeptness in both conventional and innovative technologies, I have played a pivotal role in driving our company\'s advancement and fostering creativity. My duties encompassed in-depth exploration of the most current UI trends. Additionally, I have made significant contributions to database architecture within service projects, and I have independently completed several PHP projects with great success.'
    },
    {
      company: 'Kenstack Technologies',
      location: 'Trichy',
      title: 'FullStack Developer (Onsite + Remote)',
      duration: '2024',
      description: 'I worked part-time both in-office and remotely as a Fullstack Developer and Tutor to balance my M.Tech studies. In the office, I tutored students in fullstack development, providing hands-on guidance and developing comprehensive lesson plans. Remotely, I developed and maintained numerous PHP projects, managing both front-end and back-end tasks. Additionally, I handled domain purchasing, hosting, and server management using tools like cPanel and FileZilla. This flexible work plan allowed me to effectively manage my classes and studies while gaining practical industry experience.'
    }
  ];

  return (
    <div className='min-h-screen bg-sky-100 flex flex-col items-center justify-center py-12' id="experience">
      <div className='w-full max-w-4xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-center  text-violet-600 mb-12'>Work Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{exp.company}</h2>
            <p className="text-gray-600">{exp.location}</p>
            <p className="text-gray-500 italic">{exp.title} ({exp.duration})</p>
            <p className="mt-4 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
