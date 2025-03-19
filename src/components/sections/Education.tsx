
import React, { useEffect, useRef } from 'react';
import { Calendar, Award, FileText, GraduationCap, BookOpen } from 'lucide-react';

// Education data
const education = [
  {
    degree: "MS in Computer Engineering",
    institution: "New York University (NYU)",
    location: "USA",
    period: "September 2023 - May 2025",
    gpa: "3.7/4.0",
    achievements: []
  },
  {
    degree: "Bachelors of Engineering in Information Technology",
    institution: "St Francis Institute of Technology",
    location: "INDIA",
    period: "August 2020 - May 2023",
    gpa: "3.7/4.0",
    achievements: []
  }
];

// Technical skills data organized by category - updated to reflect Java
const skills = {
  "Front-End": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Tailwind CSS", "Material UI", "Bootstrap", "Styled Components", "Figma"],
  "Back-End and Database": ["Java", "Spring Boot", "Python", "MySQL", "MongoDB"],
  "Build and Testing Tools": ["Webpack", "Babel", "npm", "Yarn", "Jest", "React Testing Library", "git", "AWS"]
};

export default function Education() {
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
      id="education" 
      ref={sectionRef}
      className="section-padding relative animate-on-scroll overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 gradient-bg opacity-30" />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <h2 className="section-title">Education & Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Academic Education
            </h3>
            
            <div className="space-y-10">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-xl relative overflow-hidden card-hover"
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
                  
                  <h4 className="text-xl font-bold text-primary">{item.degree}</h4>
                  <div className="text-sm font-semibold mt-1 bg-primary/10 text-primary inline-block px-2 py-1 rounded">GPA: {item.gpa}</div>
                  
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4 text-primary" />
                    <span>{item.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>{item.period}</span>
                  </div>
                  
                  {item.achievements.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-sm font-medium mb-2">Achievements:</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-primary" />
              Technical Skills
            </h3>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="glass p-6 rounded-xl card-hover">
                  <h4 className="text-xl font-bold text-primary mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-white/50 dark:bg-gray-800/50 rounded-full text-sm border border-white/10 dark:border-gray-700/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
