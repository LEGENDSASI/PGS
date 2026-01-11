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
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
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

     
        <div>
          <div className="flex items-center mb-8">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
              style={{ backgroundColor: 'hsl(var(--color-primary))' }}
            >
              <Calendar 
                className="w-6 h-6" 
                style={{ color: 'hsl(var(--color-primary-foreground))' }}
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span style={{ color: 'hsl(var(--color-primary))' }}>🎉 PGS Events</span> – Services & Inclusions
              </h3>
              <p className="opacity-80">Complete event management for every celebration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Events We Handle */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                ✨ Events We Handle
              </h4>
              <div className="space-y-2">
                {[
                  "Birthday Parties",
                  "New Year Parties",
                  "Outdoor Parties",
                  "College Parties",
                  "School Parties",
                  "Engagements",
                  "Weddings & Receptions",
                  "Corporate Events",
                  "Baby Shower / Naming Ceremony",
                  "Anniversary Celebrations",
                  "Private Parties",
                  "Beach & Villa Events"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Inclusions */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                🎊 Our Inclusions
              </h4>
              <div className="space-y-2">
                {[
                  "Complete Event Planning",
                  "Theme-Based Decorations",
                  "Stage, Backdrop & Floral Décor",
                  "Sound System & DJ Arrangement",
                  "Lighting & Special Effects",
                  "Photography & Videography",
                  "Catering Arrangements (Veg / Non-Veg)",
                  "Welcome & Guest Management",
                  "Food Stall Setup",
                  "AC Transport for Guests (on request)",
                  "On-Site Event Supervisor"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why PGS Events */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--color-primary))' }} />
                Why PGS Events
              </h4>
              <div className="space-y-3">
                {[
                  "Customized Packages",
                  "Best Pricing in Town",
                  "Quality Materials & Setup",
                  "Professional & Friendly Team",
                  "End-to-End Event Management"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0" style={{ backgroundColor: 'hsl(var(--color-primary))' }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Tagline */}
              <div 
                className="mt-6 p-4 rounded-lg border-l-4"
                style={{
                  backgroundColor: 'hsl(var(--color-primary) / 0.1)',
                  borderLeftColor: 'hsl(var(--color-primary))'
                }}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold mb-1" style={{ color: 'hsl(var(--color-primary))' }}>
                    PGS Events
                  </div>
                  <div className="text-xs opacity-90">
                    We Create Moments, You Create Memories
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Music className="w-5 h-5" />, name: "DJ & Sound" },
              { icon: <Camera className="w-5 h-5" />, name: "Photography" },
              { icon: <Utensils className="w-5 h-5" />, name: "Catering" },
              { icon: <Sparkles className="w-5 h-5" />, name: "Decoration" },
              { icon: <Users className="w-5 h-5" />, name: "Guest Management" },
              { icon: <Car className="w-5 h-5" />, name: "Transport" },
              { icon: <Coffee className="w-5 h-5" />, name: "Food Stalls" },
              { icon: <Shield className="w-5 h-5" />, name: "Supervisor" }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl border text-center transition-all duration-300 hover:shadow-sm"
                style={{
                  backgroundColor: 'hsl(var(--color-bg))',
                  borderColor: 'hsl(var(--color-border))'
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                  style={{ backgroundColor: 'hsl(var(--color-primary) / 0.1)' }}
                >
                  <div style={{ color: 'hsl(var(--color-primary))' }}>
                    {service.icon}
                  </div>
                </div>
                <span className="text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default WhatWeProvideSection;