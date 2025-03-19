
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink, Briefcase, Code, CircleUser, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Work experience data
const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Leo9 Studio",
    location: "Mumbai, India",
    period: "January 2022 - August 2023",
    achievements: [
      "Developed Payzli payment application with React, improving user experience and increasing conversion rates by 25%",
      "Optimized GraphQL API with Apollo, resulting in 40% faster data retrieval from MongoDB",
      "Elevated system throughput by 30% through efficient client-server data transfers",
      "Implemented Java Spring Boot RESTful API with 25% improved response time",
      "Integrated WebSockets for real-time updates, boosting user engagement by 25%",
      "Optimized React components with hooks, reducing re-renders by 35%",
      "Reduced front-end bugs by 89% through code reviews and automated testing"
    ],
    technologies: ["React", "GraphQL", "MongoDB", "WebSockets", "REST API", "Java"],
    logo: "https://via.placeholder.com/150"
  }
];

// Project experience data
const projects = [
  {
    id: 1,
    title: "Sampark - Event Management Application",
    period: "",
    achievements: [
      "Developed comprehensive event management platform with admin and user interfaces",
      "Engineered ForgeRock SSO solution, reducing login times by 50%",
      "Optimized GraphQL queries, cutting response time by 40%",
      "Implemented Redux and Redux-Thunk for state management, improving load times by 30%",
      "Integrated Stripe API for secure payments, boosting transaction speed by 30%"
    ],
    technologies: ["React", "Redux", "GraphQL", "ForgeRock SSO", "Stripe API", "Java"],
    image: "https://via.placeholder.com/400x300"
  },
  {
    id: 2,
    title: "Cricket Auction Application",
    period: "",
    achievements: [
      "Created innovative player auction tool for cricket league organizers",
      "Designed admin dashboard with React.js for efficient management",
      "Built team creation features using React hooks and context API",
      "Implemented Firebase and JWT authentication for secure role-based access",
      "Visualized performance metrics with Chart.js, increasing user insights by 30%",
      "Achieved 100% code coverage with Jest, reducing bugs by 40%"
    ],
    technologies: ["React", "Firebase", "JWT", "Chart.js", "Jest", "Context API", "Java"],
    image: "https://via.placeholder.com/400x300"
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState("work");
  const [activeWorkId, setActiveWorkId] = useState(1);
  const [activeProjectId, setActiveProjectId] = useState(1);
  
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
      id="experience" 
      ref={sectionRef}
      className="section-padding relative animate-on-scroll overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 gradient-bg opacity-50" />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <h2 className="section-title">Professional Experience</h2>
        
        <Tabs defaultValue="work" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
          <TabsList className="grid w-full max-w-md grid-cols-2 p-2 h-18 rounded-full bg-secondary/30 backdrop-blur-sm border border-primary/20 overflow-hidden">

              <TabsTrigger value="work" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300">
                <Briefcase className="mr-2 h-5 w-5" />
                Work Experience
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300">
                <Code className="mr-2 h-5 w-5" />
                Projects
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Work Experience Tab */}
          <TabsContent value="work" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Company Info */}
              <div className="col-span-1">
                <div className="sticky top-24 glass p-6 rounded-xl border border-primary/10 shadow-xl backdrop-blur-sm">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 border-2 border-primary/20">
                      <CircleUser className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">{experiences[activeWorkId - 1].company}</h3>
                    <span className="text-sm text-muted-foreground mt-1">{experiences[activeWorkId - 1].location}</span>
                    
                    <div className="flex items-center mt-4 text-sm bg-primary/5 px-3 py-1 rounded-full">
                      <Calendar className="mr-2 h-4 w-4 text-primary" />
                      <span>{experiences[activeWorkId - 1].period}</span>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-primary/10 w-full">
                      <h4 className="font-medium mb-3 text-muted-foreground">Position</h4>
                      <p className="text-xl font-semibold text-primary">{experiences[activeWorkId - 1].title}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job Details */}
              <div className="col-span-2">
                <div className="glass p-8 rounded-xl border border-primary/10 shadow-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
                  
                  <div className="space-y-6">
                    {experiences[activeWorkId - 1].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300">
                        <div className="mt-1 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-primary/10">
                    <h4 className="w-full text-lg font-semibold mb-3">Technologies Used</h4>
                    {experiences[activeWorkId - 1].technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground cursor-default transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Projects Navigation */}
              <div className="col-span-1">
                <div className="sticky top-24 space-y-3">
                  {projects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProjectId(project.id)}
                      className={cn(
                        "w-full text-left p-4 transition-all rounded-xl border backdrop-blur-sm",
                        activeProjectId === project.id 
                          ? "bg-primary text-primary-foreground border-primary shadow-lg" 
                          : "glass hover:bg-secondary/50 border-primary/10 hover:shadow-lg"
                      )}
                    >
                      <span className="block text-lg font-medium">{project.title}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="col-span-2">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className={cn(
                      "glass p-8 rounded-xl border border-primary/10 shadow-xl backdrop-blur-sm space-y-6",
                      activeProjectId === project.id ? "block" : "hidden"
                    )}
                  >
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">{project.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                      {project.achievements.map((achievement, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                          <div className="flex items-start gap-3">
                            <div className="min-w-5 mt-1 text-primary">
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <p className="text-foreground">{achievement}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-primary/10">
                      <h4 className="w-full text-lg font-semibold mb-3">Technologies Used</h4>
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground cursor-default transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
