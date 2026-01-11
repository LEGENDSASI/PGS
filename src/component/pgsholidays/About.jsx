// components/AboutUsSection.jsx
import React from 'react';
import { 
  MapPin, 
  Plane, 
  Users, 
  School, 
  Briefcase, 
  Globe,
  Shield,
  Compass,
  Calendar,
  Luggage,
  Star,
  CheckCircle
} from 'lucide-react';

const AboutUsSection = () => {
  const travelerTypes = [
    {
      icon: <School className="w-6 h-6" />,
      name: "School Groups",
      description: "Educational and fun trips for students"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "College Groups",
      description: "Adventure trips for college students"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Friends & Family",
      description: "Group trips for memorable experiences"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Solo Travelers",
      description: "Personalized solo travel experiences"
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Group Travelers",
      description: "Organized trips for large groups"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Corporate Groups",
      description: "Team building and corporate retreats"
    }
  ];

  const domesticDestinations = [
    { name: "Pondicherry", icon: "🌊" },
    { name: "Mahabalipuram", icon: "🏛️" },
    { name: "Chennai", icon: "🌆" },
    { name: "Coorg", icon: "🌿" },
    { name: "Thekkady", icon: "🐘" },
    { name: "Munnar", icon: "🍵" }
  ];

  const internationalDestinations = [
    { name: "Thailand", icon: "🇹🇭" },
    { name: "UAE", icon: "🇦🇪" },
    { name: "Singapore", icon: "🇸🇬" },
    { name: "Malaysia", icon: "🇲🇾" },
    { name: "Sri Lanka", icon: "🇱🇰" },
    { name: "Maldives", icon: "🇲🇻" }
  ];

  const services = [
    { icon: <Calendar className="w-5 h-5" />, name: "Travel Planning" },
    { icon: <Luggage className="w-5 h-5" />, name: "Accommodation" },
    { icon: <Plane className="w-5 h-5" />, name: "Transportation" },
    { icon: <Compass className="w-5 h-5" />, name: "Activities" },
    { icon: <Users className="w-5 h-5" />, name: "Coordination" },
    { icon: <Shield className="w-5 h-5" />, name: "Safety & Support" }
  ];

  const benefits = [
    "Safe and well-organized tours",
    "Experienced travel coordinators",
    "Customized itineraries",
    "24/7 customer support",
    "Group discounts available",
    "All-inclusive packages"
  ];

  return (
    <section id="about" className="py-10 md:py-10 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
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
            <Plane 
              className="w-8 h-8" 
              style={{ color: 'hsl(var(--color-primary))' }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span style={{ color: 'hsl(var(--color-primary))' }}>PGS Holidays</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Creating unforgettable travel experiences for every kind of traveler
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
                  <Globe 
                    className="w-6 h-6" 
                    style={{ color: 'hsl(var(--color-primary-foreground))' }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Our Mission
                  </h3>
                  <p>
                    PGS Holidays organizes memorable trips for schools, colleges, friends, families, and even solo or group travelers.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">
                We plan safe, well-organized tours for both domestic and international destinations.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                From refreshing local getaways like Pondicherry, Mahabalipuram, Chennai, Coorg, and Thekkady, 
                to exciting international trips to Thailand and UAE, we take care of everything — 
                travel planning, stay, activities, and coordination.
              </p>
              
              <div 
                className="p-6 rounded-xl border-l-4"
                style={{
                  backgroundColor: 'hsl(var(--color-primary) / 0.1)',
                  borderLeftColor: 'hsl(var(--color-primary))'
                }}
              >
                <h4 className="text-xl font-bold mb-2">
                  PGS Holidays
                </h4>
                <p 
                  className="text-lg font-semibold"
                  style={{ color: 'hsl(var(--color-primary))' }}
                >
                  Travel easy, travel together, and create lasting memories.
                </p>
              </div>
            </div>

           
   
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Traveler Types */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Who We Serve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {travelerTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: 'hsl(var(--color-bg))',
                      borderColor: 'hsl(var(--color-border))'
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                      >
                        <div style={{ color: 'hsl(var(--color-primary-foreground))' }}>
                          {type.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {type.name}
                        </h4>
                        <p className="text-sm opacity-80 mt-1">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    className="p-4 rounded-xl border text-center transition-all duration-300 hover:shadow-md"
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
        </div>

    
      </div>
    </section>
  );
};

export default AboutUsSection;