
import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create form data to submit
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    // You would typically send this to a backend service
    const mailtoLink = `mailto:yashspatel16@gmail.com?subject=${encodeURIComponent(
      formData.get('subject') as string || 'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
    )}`;
    
    window.open(mailtoLink);
    //alert('Thank you for your message. I will get back to you shortly!');
    formElement.reset();
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding animate-on-scroll"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-center">
          Get In Touch
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Whether you have a question, a project idea, or just want to say hello, feel free to reach out. 
          I'm always open to discussing new opportunities.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300">
              <div className="mt-1 bg-primary/10 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground mt-1">
                  <a 
                    href="mailto:yashspatel16@gmail.com" 
                    className="hover:text-primary transition-standard"
                  >
                    yashspatel16@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300">
              <div className="mt-1 bg-primary/10 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground mt-1">New York, USA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300">
              <div className="mt-1 bg-primary/10 p-3 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-muted-foreground mt-1">
                  <a 
                    href="tel:+15517273165" 
                    className="hover:text-primary transition-standard"
                  >
                    (551) 727-3165
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form name="contact" onSubmit={handleSubmit} className="glass p-6 rounded-xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-primary/10",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-standard"
                    )}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-secondary/50 border border-primary/10",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                      "transition-standard"
                    )}
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-secondary/50 border border-primary/10",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                    "transition-standard"
                  )}
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-secondary/50 border border-primary/10",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
                    "transition-standard"
                  )}
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className={cn(
                  "inline-flex items-center justify-center",
                  "px-6 py-3 rounded-lg font-medium",
                  "bg-primary text-primary-foreground",
                  "shadow-lg shadow-primary/20",
                  "hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105",
                  "transition-all duration-300"
                )}
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
