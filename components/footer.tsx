'use client';

import { Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Salon Elegance</h3>
            <p className="text-sm opacity-90">
              Premium beauty and hair salon services for women in Islamabad.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Hair Services</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Makeup</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Skincare</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Bridal Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:opacity-80 transition-opacity">About Us</a></li>
              <li><a href="#booking" className="hover:opacity-80 transition-opacity">Book Appointment</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Gallery</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>F-10 Islamabad, Pakistan</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={16} />
                <a href="tel:+923089340529" className="hover:opacity-80 transition-opacity">
                  +92 308 934 0529
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <MessageCircle size={16} />
                <a href="https://wa.me/923089340529" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              &copy; 2026 Salon Elegance. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/923089340529"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
