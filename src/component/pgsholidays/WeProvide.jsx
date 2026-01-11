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
    <section id="services" className="py-10 md:py-10 relative overflow-hidden">
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

        {/* PGS Holidays */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
              style={{ backgroundColor: 'hsl(var(--color-primary))' }}
            >
              <MapPin 
                className="w-6 h-6" 
                style={{ color: 'hsl(var(--color-primary-foreground))' }}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span style={{ color: 'hsl(var(--color-primary))' }}>🌴 PGS Holidays</span> – Package Inclusions
              </h3>
              <p className="opacity-80">Complete travel experiences with everything taken care of</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Transportation & Activities
              </h4>
              <div className="space-y-4">
                {[
                  "Boating Ticket – 1 Hour Ride covering 4 View Points",
                  "Mangrove Boating Tickets",
                  "Entry Tickets for all mentioned attractions",
                  "Toll Tickets",
                  "Parking Tickets Included",
                  "AC Car with Professional Driver"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--color-primary))' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Home className="w-5 h-5 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Accommodation & Services
              </h4>
              <div className="space-y-4">
                {[
                  "Stay Arrangements",
                  "Private Villa Stay with Swimming Pool",
                  "Breakfast Included",
                  "Refreshments Provided",
                  "English-Speaking Guide",
                  "Water Bottles",
                  "Dinner Arrangements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--color-primary))' }} />
                    <span>{item}</span>
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