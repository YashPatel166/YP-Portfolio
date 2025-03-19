
import React, { useEffect, useRef } from 'react';
import { CheckCircle2, BarChart3, Database, Code2 } from 'lucide-react';

// Skill categories with proficiency - Updated to reflect Java instead of Node.js
const skillCategories = [
  {
    name: "Frontend",
    icon: <Code2 className="h-8 w-8 text-primary" />,
    skills: [
      { name: "React", proficiency: 95 },
      { name: "JavaScript", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "HTML/CSS", proficiency: 95 },
      { name: "Redux", proficiency: 85 },
      { name: "Material UI", proficiency: 85 },
    ]
  },
  {
    name: "Backend",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Java", proficiency: 95 },
      { name: "Spring Boot", proficiency: 85 },
      { name: "GraphQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 95 },
      { name: "REST APIs", proficiency: 90 },
      { name: "Python", proficiency: 90 },
    ]
  },
  {
    name: "Tools & Other",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    skills: [
      { name: "Git/GitHub", proficiency: 95 },
      { name: "Webpack/Babel", proficiency: 85 },
      { name: "Jest/Testing", proficiency: 85 },
      { name: "npm/Yarn", proficiency: 90 },
      { name: "AWS", proficiency: 85 },
      { name: "CI/CD", proficiency: 80 },
    ]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Animate progress bars
          const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              if (bar instanceof HTMLElement) {
                bar.style.width = bar.dataset.width || '0%';
              }
            }, index * 100);
          });
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
      id="skills" 
      ref={sectionRef}
      className="section-padding relative animate-on-scroll overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 gradient-bg opacity-30" />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <h2 className="section-title">
          Technical Proficiency
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="glass p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs font-semibold px-2 py-1 bg-secondary rounded-full">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: '0%' }}
                        data-width={`${skill.proficiency}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tailwind CSS", "Bootstrap", "Styled Components", "Figma",
              "Firebase", "JWT", "MySQL", "Stripe API", "Chart.js", 
              "WebSockets", "ForgeRock SSO", "Context API", "Spring Boot", "Maven"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary hover:bg-primary/10 hover:text-primary rounded-full text-sm font-medium transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
