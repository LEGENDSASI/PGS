import React from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 px-4"
      style={{
        backgroundColor: 'hsl(var(--color-bg))',
        borderTop: '1px solid hsl(var(--color-border))'
      }}
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">


        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/pondy_getaway_stays?igsh=MW1vOXozNzZpc29z&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all hover:scale-110"
            style={{ borderColor: 'hsl(var(--color-border))', color: 'hsl(var(--color-text))' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary) / 0.1)';
              e.currentTarget.style.color = 'hsl(var(--color-primary))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--color-text))';
            }}
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.facebook.com/share/1BpfhLe9jb/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all hover:scale-110"
            style={{ borderColor: 'hsl(var(--color-border))', color: 'hsl(var(--color-text))' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary) / 0.1)';
              e.currentTarget.style.color = 'hsl(var(--color-primary))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--color-text))';
            }}
          >
            <Facebook className="w-6 h-6" />
          </a>

          <a
            href="tel:8072008376"
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all hover:scale-110"
            style={{ borderColor: 'hsl(var(--color-border))', color: 'hsl(var(--color-text))' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--color-primary) / 0.1)';
              e.currentTarget.style.color = 'hsl(var(--color-primary))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(var(--color-text))';
            }}
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <div className="space-y-2">
          <div
            className="text-sm"
            style={{ color: 'hsl(var(--color-text) / 0.7)' }}
          >
            © {currentYear} PGS GROUPS. All rights reserved.
          </div>

          <p
            className="text-sm"
            style={{ color: 'hsl(var(--color-text) / 0.7)' }}
          >
            Designed & Developed by{" "}
            <a href="tel:+916374788302" className="hover:underline">
              +91 63747 88302
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
