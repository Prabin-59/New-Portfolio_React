import React from 'react';
import { Button } from '../../components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="container px-4 py-32 mx-auto text-center">
        <div 
          className="animate-fadeIn"
          style={{animationDelay: '0ms'}}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
           Er. Prabin Acharya
          </h1>
        </div>
        <div 
          className="animate-fadeIn"
          style={{animationDelay: '200ms'}}
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Computer Engineer
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Developer, Problem Solver, Tech Enthusiast
          </p>
        </div>
        <div 
          className="animate-fadeIn"
          style={{animationDelay: '400ms'}}
        >
          <Button size="lg" className="rounded-full" onClick={scrollToAbout}>
            Learn More <ChevronDown className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}