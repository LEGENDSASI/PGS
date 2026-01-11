
import React from 'react';
import { 
  Home, 
  MapPin, 
  Users, 
  Shield, 
  Sparkles, 
  Coffee,
  Wifi,
  Car,
  Utensils,
  Heart,
  Star,
  CheckCircle,
  Key
} from 'lucide-react';

const AboutUsSection = () => {
  const propertyTypes = [
    {
      icon: <Home className="w-6 h-6" />,
      name: "Luxury Villas",
      description: "Spacious villas with private amenities"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Beach Houses",
      description: "Properties with beach access"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Heritage Homes",
      description: "Traditional Pondicherry architecture"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Modern Apartments",
      description: "Contemporary urban stays"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Family Villas",
      description: "Child-friendly accommodations"
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Group Retreats",
      description: "Large properties for gatherings"
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, name: "High-Speed WiFi" },
    { icon: <Car className="w-5 h-5" />, name: "Parking Space" },
    { icon: <Utensils className="w-5 h-5" />, name: "Kitchen Facilities" },
    { icon: <Sparkles className="w-5 h-5" />, name: "Daily Cleaning" },
    { icon: <Shield className="w-5 h-5" />, name: "24/7 Security" },
    { icon: <Coffee className="w-5 h-5" />, name: "Complimentary Tea/Coffee" }
  ];

  const pondicherryLocations = [
    { name: "White Town", description: "French Quarter Heritage" },
    { name: "Beach Road", description: "Ocean View Properties" },
    { name: "Auroville", description: "Spiritual Community Area" },
    { name: "City Center", description: "Central Convenient Location" },
    { name: "Karaikal", description: "Coastal Town Nearby" },
    { name: "Promenade", description: "Seafront Walking Area" }
  ];

  const stayOptions = [
    { type: "Family Vacations", description: "Peaceful and comfortable stays" },
    { type: "Group Getaways", description: "Fun and spacious accommodations" },
    { type: "Solo Retreats", description: "Cozy and secure stays" },
    { type: "Couple Getaways", description: "Romantic private villas" },
    { type: "Business Stays", description: "Work-friendly amenities" },
    { type: "Long-term Stays", description: "Monthly rental options" }
  ];

  const benefits = [
    "Well-maintained properties",
    "Personalized concierge service",
    "24/7 customer support",
    "Local experience recommendations",
    "Flexible check-in/out",
    "Competitive pricing"
  ];

  return (
    <section id="about" className="py-16 md:py-10 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 20% 30%, hsl(var(--color-primary)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--color-accent)) 0%, transparent 40%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'hsl(var(--color-primary) / 0.1)' }}
          >
            <Home 
              className="w-8 h-8" 
              style={{ color: 'hsl(var(--color-primary))' }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span style={{ color: 'hsl(var(--color-primary))' }}>PGS Stays</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Your home away from home in beautiful Pondicherry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            {/* Main Description Card */}
            <div 
              className="rounded-2xl p-8 shadow-lg border relative overflow-hidden"
              style={{
                backgroundColor: 'hsl(var(--color-bg))',
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              {/* Decorative corner */}
              <div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: 'hsl(var(--color-primary))' }}
              />
              
              <div className="flex items-start space-x-4 mb-6 relative">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
                  style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                >
                  <MapPin 
                    className="w-6 h-6" 
                    style={{ color: 'hsl(var(--color-primary-foreground))' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Pondy Getaway Stays
                  </h3>
                  <p className="opacity-90">
                    Comfortable, stylish, and hassle-free stays in the heart of Pondicherry.
                  </p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">
                From peaceful family vacations to fun group getaways, we provide well-maintained villas 
                and homestays with personalized service—so you can relax and enjoy Pondy like home.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stayOptions.slice(0, 4).map((option, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg border transition-all duration-300 hover:shadow-sm"
                    style={{
                      backgroundColor: 'hsl(var(--color-bg))',
                      borderColor: 'hsl(var(--color-border))'
                    }}
                  >
                    <div className="font-medium mb-1">{option.type}</div>
                    <div className="text-sm opacity-80">{option.description}</div>
                  </div>
                ))}
              </div>
              
              <div 
                className="p-6 rounded-xl border-l-4 mt-6"
                style={{
                  backgroundColor: 'hsl(var(--color-primary) / 0.1)',
                  borderLeftColor: 'hsl(var(--color-primary))'
                }}
              >
                <div className="flex items-center mb-2">
                  <Heart 
                    className="w-5 h-5 mr-2"
                    style={{ color: 'hsl(var(--color-primary))' }}
                  />
                  <h4 className="text-xl font-bold">
                    PGS Stays Promise
                  </h4>
                </div>
                <p 
                  className="text-lg font-semibold"
                  style={{ color: 'hsl(var(--color-primary))' }}
                >
                  Experience Pondicherry with the comfort of home
                </p>
              </div>
            </div>

       
          </div>

          
          <div className="space-y-8">
           
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Our Property Collection
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {propertyTypes.map((property, index) => (
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
                          {property.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {property.name}
                        </h4>
                        <p className="text-sm opacity-80 mt-1">
                          {property.description}
                        </p>
                      </div>
                      <Key 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'hsl(var(--color-primary))' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Standard Amenities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
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
                        {amenity.icon}
                      </div>
                    </div>
                    <span className="text-sm font-medium">{amenity.name}</span>
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