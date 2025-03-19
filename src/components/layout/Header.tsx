
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-mono tracking-tight hover:opacity-80 transition-standard"
        >
          Yash Patel
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden pt-16 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="container px-4 flex flex-col space-y-8 py-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-2xl font-medium animate-slide-down',
                { 'opacity-0': !isOpen },
                { 'animation-delay-100': index === 0 },
                { 'animation-delay-200': index === 1 },
                { 'animation-delay-300': index === 2 },
                { 'animation-delay-400': index === 3 },
                { 'animation-delay-500': index === 4 }
              )}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
