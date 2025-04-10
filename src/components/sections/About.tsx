import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516554646385-7642248096d1')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                  Computer Engineer
                </span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Er. Prabin Acharya</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
              I'm a passionate developer with experience in building efficient, user-focused software and web applications.
               I specialize in technologies like .NET, SQL Server, and React, and enjoy solving real-world problems through clean code and smart architecture. 
               Whether it's designing a backend system, managing databases, or crafting a sleek frontend UI, I'm all about delivering reliable solutions.

                </p>
           
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Skills</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>DataBase</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>.Net</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>React</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Javascript</span>
                  </li>
                </ul>
              </div>


              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Achievements</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 3H7v2H3v3c0 2.76 2.24 5 5 5 0 2.8 1.91 5.13 4.5 5.83V21H9v2h6v-2h-3.5v-2.17c2.59-.7 4.5-3.03 4.5-5.83 2.76 0 5-2.24 5-5V5h-4V3z"/>
                      </svg>
                    </div>
                    <span>Best VolleyBall Captain</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3H7v2H3v3c0 2.76 2.24 5 5 5 0 2.8 1.91 5.13 4.5 5.83V21H9v2h6v-2h-3.5v-2.17c2.59-.7 4.5-3.03 4.5-5.83 2.76 0 5-2.24 5-5V5h-4V3z"/>
                  </svg>
                        </div>
                    <span>Winner of RoboDesk</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 3H7v2H3v3c0 2.76 2.24 5 5 5 0 2.8 1.91 5.13 4.5 5.83V21H9v2h6v-2h-3.5v-2.17c2.59-.7 4.5-3.03 4.5-5.83 2.76 0 5-2.24 5-5V5h-4V3z"/>
                    </svg>
                    </div>
                    <span>Certified Computer Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M17 3H7v2H3v3c0 2.76 2.24 5 5 5 0 2.8 1.91 5.13 4.5 5.83V21H9v2h6v-2h-3.5v-2.17c2.59-.7 4.5-3.03 4.5-5.83 2.76 0 5-2.24 5-5V5h-4V3z"/>
                    </svg>
                    </div>
                    <span>Employee of the Year</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}