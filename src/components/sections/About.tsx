
import React, { useEffect, useRef } from 'react';
import { UserCircle2, MapPin, CalendarDays, Briefcase } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding relative animate-on-scroll overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 hero-gradient pointer-events-none" />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden bg-secondary/50 shadow-xl border border-white/10">
              <Avatar className="w-64 h-64 rounded-none">
              <AvatarImage src="/lovable-uploads/a7cef4f5-b2b3-4076-b9e4-f3355b1cc918.png" alt="Yash Patel" className="object-cover w-full h-full" />
              <AvatarFallback className="w-full h-full text-6xl">YP</AvatarFallback>
              </Avatar>

              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 p-3 glass rounded-xl transform hover:scale-105 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg">New York, USA</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 glass rounded-xl transform hover:scale-105 transition-all duration-300">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-lg">Full Stack Developer</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 glass rounded-xl transform hover:scale-105 transition-all duration-300">
                <UserCircle2 className="h-5 w-5 text-primary" />
                <span className="text-lg">MS in Computer Engineering</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 space-y-6">
            <p className="text-xl leading-relaxed">
              I'm a passionate Software Engineer with experience developing responsive web applications using
              modern JavaScript frameworks. I'm currently based in New York after completing my master's degree at NYU.
            </p>
            
            <div className="glass p-6 rounded-xl space-y-6 border border-primary/10 shadow-lg backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                My expertise includes full-stack development with <span className="font-semibold text-primary">React.js</span>, <span className="font-semibold text-primary">Java</span>, and <span className="font-semibold text-primary">GraphQL</span>. I'm particularly 
                interested in building scalable applications with optimized performance and clean, maintainable code.
              </p>
              
              <p className="text-lg leading-relaxed">
                I have experience working with various technologies including React, Redux, GraphQL, MongoDB, 
                and AWS. I'm passionate about writing efficient code and creating engaging user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="glass p-6 rounded-xl border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Frontend Skills</h3>
                <p className="text-muted-foreground">React, Redux, TypeScript, Material UI, HTML/CSS</p>
              </div>
              
              <div className="glass p-6 rounded-xl border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Backend Skills</h3>
                <p className="text-muted-foreground">Java, Spring Boot, GraphQL, MongoDB, REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}
