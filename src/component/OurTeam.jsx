import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Star, Globe, Briefcase, Phone } from 'lucide-react';
import t1 from '../assets/OurTeam/1.PNG';
import t2 from '../assets/OurTeam/2.jpg';
import t3 from '../assets/OurTeam/3.png';
import t4 from '../assets/OurTeam/4.jpg';
import t5 from '../assets/OurTeam/5.jpg';
import t6 from '../assets/OurTeam/6.png';
import t7 from '../assets/OurTeam/7.jpg'; 

const OurTeam = () => {

     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        })
      }, [])

      
  const teamMembers = [
    {
      id: 1,
      name: "Keerthika",
      role: "CEO & Managing Director",
      division: "PGS Groups",
      image: t1,
      languages: "",
      stats: { experience: "10+ Years", teams: "3 Divisions" }
    },
    {
      id: 2,
      name: "Priya Soop",
      role: "Project Manager, Procurement",
      division: "PGS Holidays",
      image: t2,
      languages: "",
      stats: { experience: "7+ Years", projects: "500+" }
    },
    {
      id: 3,
      name: "Shafreen",
      role: "Tourist Guide",
      division: "PGS Holidays",
      image: t3,
      languages: "Hindi, English, Tamil, Urdu, French",
      stats: { experience: "5+ Years", tours: "1000+" }
    },
    {
      id: 4,
      name: "Shalini",
      role: "BDE & Tourist Guide",
      division: "PGS Holidays",
      image: t4,
      languages: "English, Tamil",
      stats: { experience: "4+ Years", clients: "300+" }
    },
    {
      id: 5,
      name: "Harini",
      role: "Business Development Executive",
      division: "PGS",
      image: t5,
      languages: "",
      stats: { experience: "3+ Years", deals: "200+" }
    },
    {
      id: 6,
      name: "Sasikumar",
      role: "Digital Marketing",
      division: "",
      image: t6,
      languages: "",
      stats: { experience: "6+ Years", campaigns: "150+" }
    },
    {
      id: 7,
      name: "Akshai",
      role: "Tourist Guide",
      division: "",
      image: t7,
      languages: "English, Tamil, Hindi",
      stats: { experience: "4+ Years", groups: "500+" }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="relative py-10 px-4 overflow-hidden"
      id='team'
      style={{
        backgroundColor: 'hsl(var(--color-bg))'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--color-primary) / 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border"
            style={{
              borderColor: 'hsl(var(--color-primary) / 0.2)',
              backgroundColor: 'hsl(var(--color-primary) / 0.05)'
            }}
          >
            <Users className="w-5 h-5" style={{ color: 'hsl(var(--color-primary))' }} />
            <span 
              className="text-sm font-semibold tracking-wider"
              style={{
                color: 'hsl(var(--color-primary))'
              }}
            >
              MEET OUR TEAM
            </span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{
              color: 'hsl(var(--color-text))'
            }}
          >
            Our <span style={{ color: 'hsl(var(--color-primary))' }}>Team</span> 
          </h2>
          
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: 'hsl(var(--color-text) / 0.7)'
            }}
          >
            Dedicated professionals committed to delivering exceptional experiences across all PGS divisions
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-xl h-full border backdrop-blur-sm"
                style={{
                  borderColor: 'hsl(var(--color-border))',
                  backgroundColor: 'hsl(var(--color-bg) / 0.8)',
                  boxShadow: '0 8px 30px -10px hsla(var(--color-primary) / 0.1)'
                }}
              >
               
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="absolute inset-0"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  
           
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                 
                </div>

                {/* Content */}
                <div className="p-5">
                  <motion.h3 
                    className="text-xl font-bold mb-1"
                    style={{
                      color: 'hsl(var(--color-text))'
                    }}
                    whileHover={{ x: 3 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    {member.role.includes("Guide") ? (
                      <Globe className="w-4 h-4" style={{ color: 'hsl(var(--color-primary))' }} />
                    ) : member.role.includes("CEO") || member.role.includes("Manager") ? (
                      <Briefcase className="w-4 h-4" style={{ color: 'hsl(var(--color-primary))' }} />
                    ) : member.role.includes("Marketing") ? (
                      <Phone className="w-4 h-4" style={{ color: 'hsl(var(--color-primary))' }} />
                    ) : (
                      <Users className="w-4 h-4" style={{ color: 'hsl(var(--color-primary))' }} />
                    )}
                    <span className="text-sm font-medium" style={{ color: 'hsl(var(--color-primary))' }}>
                      {member.role}
                    </span>
                  </div>
                  
                  {/* Languages */}
                  {member.languages && (
                    <div className="mb-4">
                      <div className="flex items-center gap-1 mb-1">
                        <Globe className="w-3 h-3" style={{ color: 'hsl(var(--color-text) / 0.6)' }} />
                        <span className="text-xs font-medium" style={{ color: 'hsl(var(--color-text) / 0.6)' }}>
                          Languages:
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: 'hsl(var(--color-text) / 0.7)' }}>
                        {member.languages}
                      </p>
                    </div>
                  )}

               
                </div>

                {/* Bottom Gradient Border */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--color-primary)) 0%, hsl(var(--color-accent)) 100%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

    
      </div>
    </div>
  );
};

export default OurTeam;