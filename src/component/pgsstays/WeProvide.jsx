// components/WhatWeProvideSection.jsx
import React from 'react';
import { 
  Package,
  Home,
  Calendar,
  CheckCircle,
  Star,
  MapPin,
  Users,
  Camera,
  Music,
  Coffee,
  Car,
  Shield,
  Wifi,
  Utensils,
  Sparkles
} from 'lucide-react';

const WhatWeProvideSection = () => {
  return (
    <section id="services" className="py-16 md:py-10 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 10% 20%, hsl(var(--color-primary)) 0%, transparent 50%), radial-gradient(circle at 90% 80%, hsl(var(--color-accent)) 0%, transparent 50%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'hsl(var(--color-primary) / 0.1)' }}
          >
            <Package 
              className="w-8 h-8" 
              style={{ color: 'hsl(var(--color-primary))' }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What We <span style={{ color: 'hsl(var(--color-primary))' }}>Provide</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Complete packages and services across all PGS divisions
          </p>
        </div>

   

        {/* PGS Stays */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
              style={{ backgroundColor: 'hsl(var(--color-primary))' }}
            >
              <Home 
                className="w-6 h-6" 
                style={{ color: 'hsl(var(--color-primary-foreground))' }}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span style={{ color: 'hsl(var(--color-primary))' }}>🏡 PGS Stays</span> – Inclusions
              </h3>
              <p className="opacity-80">Premium accommodation with complete amenities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Accommodation Features */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Home className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Accommodation
              </h4>
              <div className="space-y-3">
                {[
                  "Comfortable Accommodation",
                  "Rooms Based on Your Suggestions",
                  "Private Villa with Swimming Pool",
                  "Swimming Pool Access",
                  "Air-Conditioned Rooms",
                  "Jacuzzi, Bath Tub"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Amenities & Services
              </h4>
              <div className="space-y-3">
                {[
                  "Wi-fi Connection",
                  "Buffet Options Available",
                  "Birthday Event Arrangements",
                  "Boating, Scuba Diving, Fun Activities",
                  "Guide Services",
                  "Complimentary Breakfast"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Essentials */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Essentials & Support
              </h4>
              <div className="space-y-3">
                {[
                  "Clean Linen & Towels",
                  "24/7 Caretaker / Support",
                  "Daily Housekeeping",
                  "Free Parking",
                  "Power Backup",
                  "Basic Toiletries",
                  "Peaceful & Secure Property"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

  

      
      </div>
    </section>
  );
};

export default WhatWeProvideSection;