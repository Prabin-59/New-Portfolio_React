import React from 'react';
import { Briefcase, Laptop2, GraduationCap } from 'lucide-react';

export default function Skills() {
  const services = [
    {
      title: "Sarvanam Software",
      description: "Working as a dot net developer",
      icon: <Briefcase className="h-10 w-10 text-primary" /> 
    },
    {
      title: "Pareto Dev",
      description: "Worked as a python developer",
      icon: <Laptop2 className="h-10 w-10 text-primary" /> 
    },
    {
      title: "JalapaDevi Secondary School",
      description: "Worked as a Lecturer",
      icon: <GraduationCap className="h-10 w-10 text-primary" /> 
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-muted-foreground">
            3D (Dream, Design and Develop)
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card hover:shadow-lg transition-shadow rounded-xl p-4 border border-border"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
