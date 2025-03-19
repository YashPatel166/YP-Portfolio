
import React from 'react';
import { ArrowDownCircle, Mail, Linkedin, Github, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 hero-gradient pointer-events-none"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container max-w-6xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <div className="inline-block mb-4 px-6 py-2 border border-primary/20 rounded-full bg-primary/5 text-primary font-medium">
          Full Stack Developer
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block mb-2">Hi, I'm</span>
          <span className="gradient-text font-extrabold">Yash Patel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Software Engineer specializing in full-stack development
          with expertise in <span className="text-foreground font-medium">React.js</span> and <span className="text-foreground font-medium">Java</span>.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a href="mailto:yashspatel16@gmail.com" className="glass flex items-center gap-2 px-4 py-3 rounded-full text-foreground hover:text-primary hover:scale-105 transition-all duration-300 border border-primary/10">
            <Mail className="h-5 w-5" />
            <span>yashspatel16@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/yash-patel727" target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-2 px-4 py-3 rounded-full text-foreground hover:text-primary hover:scale-105 transition-all duration-300 border border-primary/10">
            <Linkedin className="h-5 w-5" />
            <span>linkedin.com/in/yash-patel727</span>
          </a>
          <a href="https://github.com/YashPatel166" target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-2 px-4 py-3 rounded-full text-foreground hover:text-primary hover:scale-105 transition-all duration-300 border border-primary/10">
            <Github className="h-5 w-5" />
            <span>github.com/YashPatel166</span>
          </a>
          <div className="glass flex items-center gap-2 px-4 py-3 rounded-full text-foreground hover:scale-105 transition-all duration-300 border border-primary/10">
            <Phone className="h-5 w-5" />
            <span>+1 551-727-3165</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a 
            href="#contact" 
            className={cn(
              "inline-flex items-center justify-center",
              "px-8 py-4 rounded-full font-medium",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105",
              "transition-all duration-300"
            )}
          >
            Get in touch
          </a>
          
          <a 
            href="https://yashpatel166.github.io/YashPatel_Resume_2025_FullStack.pdf" 
            target="_blank"
            className={cn(
              "inline-flex items-center justify-center",
              "px-8 py-4 rounded-full font-medium",
              "bg-secondary text-secondary-foreground border border-primary/10",
              "hover:bg-secondary/80 hover:scale-105 hover:shadow-lg",
              "transition-all duration-300"
            )}
          >
            View Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down to about section">
          <ArrowDownCircle className="h-10 w-10 text-primary hover:text-primary/80 transition-standard" />
        </a>
      </div>
    </section>
  );
}
