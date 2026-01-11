import React from 'react';
import certificate from '../assets/certificate.png'
import { motion } from 'framer-motion';


const Certificates = () => {
 
  return (
    <div 
      className="py-18 px-4"
      id='certificates'
      style={{
        backgroundColor: 'hsl(var(--color-bg))'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full mb-6"
            style={{
              backgroundColor: 'hsl(var(--color-primary) / 0.1)',
              color: 'hsl(var(--color-primary))'
            }}
          >
            <span className="text-sm font-semibold">CERTIFICATIONS</span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: 'hsl(var(--color-text))'
            }}
          >
            Our Certificates
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{
              color: 'hsl(var(--color-text) / 0.8)'
            }}
          >
            Recognized for quality and excellence in hotel booking services
          </p>
        </div>

       <div
      className=" px-4 flex justify-center"
      style={{ backgroundColor: 'hsl(var(--color-bg))' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
        className="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-lg border"
        style={{
          borderColor: 'hsl(var(--color-border))',
          backgroundColor: 'hsl(var(--color-bg))'
        }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={certificate}
            alt="Certificate"
            className="w-full h-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

          <div
            className="absolute inset-0 rounded-3xl border-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: 'hsl(var(--color-primary))' }}
          />
        </div>
      </motion.div>
    </div>
      </div>
    </div>
  );
};

export default Certificates;