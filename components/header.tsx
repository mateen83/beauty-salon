'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-serif font-bold text-primary">Salon Elegance</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Book Now
          </button>
          <a
            href="#"
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Gallery
          </a>
          <a
            href="https://wa.me/923089340529"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            onClick={() => scrollToSection('booking')}
          >
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Book Now
            </button>
            <a
              href="#"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="https://wa.me/923089340529"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
            >
              Contact
            </a>
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection('booking')}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
