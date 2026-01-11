// components/AboutUsSection.jsx
import React from 'react';
import { 
  Calendar, 
  PartyPopper, 
  Cake, 
  Users, 
  Briefcase, 
  UtensilsCrossed,
  Gamepad2,
  Trophy,
  Music,
  Sparkles,
  CheckCircle,
  Star
} from 'lucide-react';

const AboutUsSection = () => {
  const eventTypes = [
    {
      icon: <Cake className="w-6 h-6" />,
      name: "Birthday Parties",
      description: "Celebrate special moments with creative themes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Bachelor Parties",
      description: "Exciting setups for unforgettable celebrations"
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      name: "Pool Parties",
      description: "Fun-filled aquatic celebrations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Family Get-togethers",
      description: "Cozy arrangements for family moments"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      name: "Farewell Parties",
      description: "Memorable send-offs for loved ones"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Corporate Events",
      description: "Professional gatherings for businesses"
    }
  ];

  const services = [
    { icon: <UtensilsCrossed className="w-5 h-5" />, name: "Food Stalls" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Themed Setups" },
    { icon: <Gamepad2 className="w-5 h-5" />, name: "Group Games" },
    { icon: <Trophy className="w-5 h-5" />, name: "Quiz Games" },
    { icon: <Music className="w-5 h-5" />, name: "Activities" },
    { icon: <Calendar className="w-5 h-5" />, name: "Full Support" }
  ];

  const benefits = [
    "Professional event management team",
    "Customized solutions for every budget",
    "Attention to smallest details",
    "Stress-free experience for hosts",
    "Quality vendors & suppliers",
    "On-time execution & delivery"
  ];

  return (
    <section id="about" className="py-10 md:py-10 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 20% 80%, hsl(var(--color-primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--color-accent)) 0%, transparent 50%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'hsl(var(--color-primary) / 0.1)' }}
          >
            <PartyPopper 
              className="w-8 h-8" 
              style={{ color: 'hsl(var(--color-primary))' }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span style={{ color: 'hsl(var(--color-primary))' }}>PGS Events</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Creating unforgettable celebrations with professional event planning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div 
              className="rounded-2xl p-8 shadow-lg border"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                >
                  <Calendar 
                    className="w-6 h-6" 
                    style={{ color: 'hsl(var(--color-primary-foreground))' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Our Specialization
                  </h3>
                  <p>
                    PGS Events specializes in planning and managing memorable celebrations of all kinds.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">
                We organize birthday parties, bachelor and pool parties, family get-togethers, farewell parties, 
                and corporate events, with complete end-to-end support.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                From food stalls and themed setups to group games, quiz games, and fun activity arrangements 
                we take care of every detail so you can relax and enjoy your event.
              </p>
              
              <div 
                className="p-6 rounded-xl border-l-4"
                style={{
                  backgroundColor: 'hsl(var(--color-primary) / 0.1)',
                  borderLeftColor: 'hsl(var(--color-primary))'
                }}
              >
                <h4 className="text-xl font-bold mb-2">
                  PGS Events
                </h4>
                <p 
                  className="text-lg font-semibold"
                  style={{ color: 'hsl(var(--color-primary))' }}
                >
                  Celebrate your moments, stress-free.
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Our Complete Services
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: 'hsl(var(--color-bg))',
                      borderColor: 'hsl(var(--color-border))'
                    }}
                  >
                    <div style={{ color: 'hsl(var(--color-primary))' }}>
                      {service.icon}
                    </div>
                    <span className="text-sm font-medium">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Event Types */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Events We Organize
              </h3>
              <div className="space-y-4">
                {eventTypes.map((event, index) => (
                  <div 
                    key={index}
                    className="group rounded-xl p-5 border transition-all duration-300 hover:shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: 'hsl(var(--color-bg))',
                      borderColor: 'hsl(var(--color-border))'
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                      >
                        <div style={{ color: 'hsl(var(--color-primary-foreground))' }}>
                          {event.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 
                          className="text-lg font-semibold group-hover:text-primary transition-colors"
                          style={{ 
                            color: 'hsl(var(--color-text))',
                            '--color-primary': 'hsl(var(--color-primary))'
                          }}
                        >
                          {event.name}
                        </h4>
                        <p 
                          className="text-sm mt-1 opacity-80"
                          style={{ color: 'hsl(var(--color-text) / 0.8)' }}
                        >
                          {event.description}
                        </p>
                      </div>
                      <CheckCircle 
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'hsl(var(--color-primary))' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>

       
      </div>

      <style jsx>{`
        section {
          color: hsl(var(--color-text));
        }
        
        h1, h2, h3, h4, h5, h6, p, span, div {
          color: hsl(var(--color-text));
        }
        
        .text-primary {
          color: hsl(var(--color-primary));
        }
        
        .text-accent {
          color: hsl(var(--color-accent));
        }
        
        .bg-primary {
          background-color: hsl(var(--color-primary));
        }
        
        .bg-accent {
          background-color: hsl(var(--color-accent));
        }
        
        .border-primary {
          border-color: hsl(var(--color-primary));
        }
        
        .border-accent {
          border-color: hsl(var(--color-accent));
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;