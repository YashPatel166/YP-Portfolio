
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-primary/10 bg-background/50 backdrop-blur-md">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src="/lovable-uploads/a7cef4f5-b2b3-4076-b9e4-f3355b1cc918.png" alt="Yash Patel" />
                <AvatarFallback>YP</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Yash Patel</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full Stack Developer with expertise in React.js and Java, passionate about building beautiful, functional web applications.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Education
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 hover:text-primary transition-standard group">
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:yashspatel16@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-standard"
                >
                  yashspatel16@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-standard group">
                <Linkedin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a 
                  href="https://linkedin.com/in/yash-patel727" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-1"
                >
                  linkedin.com/in/yash-patel727
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-standard group">
                <Github className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <a 
                  href="https://github.com/YashPatel166" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-standard flex items-center gap-1"
                >
                  github.com/YashPatel166
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-standard group">
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-muted-foreground">
                  +1 551-727-3165
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Yash Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
