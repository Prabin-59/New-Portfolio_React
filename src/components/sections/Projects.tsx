import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Lung Cancer Prediction using CNN",
      description: "Upload your dataset and check whether it has lung cancer or not!",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://www.shutterstock.com/shutterstock/photos/2089963174/display_1500/stock-photo-close-up-of-female-doctor-pointing-at-abstract-glowing-lung-interface-with-virus-outline-on-blurry-2089963174.jpg"
    },
    {
      title: "Age Group Classification Using Deep Learning",
      description: "Verify age group through AI Based Application just by uploading facial image",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://www.shutterstock.com/shutterstock/photos/788313199/display_1500/stock-photo-smiling-bearded-young-male-model-rejoices-coming-weekends-dressed-casually-isolated-over-white-788313199.jpg"
    },
    {
      title: "Restaurant POS System",
      description: "Point of Sale system designed for restaurants, cafes, and food service businesses with inventory management and reporting.",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=500"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground">
          Code meets creativity. Let's build something great          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden border border-border transition-all hover:shadow-xl group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <a href="#" className="text-white flex items-center gap-2 hover:text-primary transition-colors">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}