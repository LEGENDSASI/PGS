import React from 'react';
import { Quote } from 'lucide-react';
import p1 from '../assets/property/p1.jpg';
import p2 from '../assets/property/p2.jpg';
import p3 from '../assets/property/p3.jpg';
import p4 from '../assets/property/p5.jpeg';

const OurServices = () => {
  const services = [
    {
      image: p1,
      quote: "Perfect hotels for bachelor parties and celebrations",
      author: "Event Booking Service"
    },
    {
      image: p2,
      quote: "Group trip accommodations with special rates",
      author: "Group Travel Service"
    },
    {
      image: p3,
      quote: "Luxury stays for corporate events and meetings",
      author: "Corporate Service"
    },
    {
      image: p4,
      quote: "Wedding and celebration venue bookings",
      author: "Event Service"
    }
  ];

  return (
    <div 
      className="py-20 px-4"
      id='services'
      style={{
        backgroundColor: 'hsl(var(--color-bg))'
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl text-center font-bold mb-10"
            style={{
              color: 'hsl(var(--color-text))'
            }}
          >
            Our Services
          </h1>
          <p 
            className="text-lg"
            style={{
              color: 'hsl(var(--color-text) / 0.8)'
            }}
          >
            Hotel booking services for all your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden border"
              style={{
                borderColor: 'hsl(var(--color-border))'
              }}
            >
              {/* Image Top */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content with Quote */}
              <div className="p-6">
                <div className="mb-4">
                  <Quote 
                    className="w-8 h-8 mb-3"
                    style={{
                      color: 'hsl(var(--color-primary))'
                    }}
                  />
                  <p 
                    className="text-lg italic mb-4"
                    style={{
                      color: 'hsl(var(--color-text))'
                    }}
                  >
                    "{service.quote}"
                  </p>
                </div>
                
                <div 
                  className="text-sm font-medium"
                  style={{
                    color: 'hsl(var(--color-text) / 0.7)'
                  }}
                >
                  {service.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;