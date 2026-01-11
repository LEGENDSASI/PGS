import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../../assets/property/Events/anniversery_celebration.jpg'
import p2 from '../../assets/property/Events/baby_shower.webp';
import p3 from '../../assets/property/Events/college_party.jpg';
import p4 from '../../assets/property/Events/birthday_party.jpg';
import p5 from '../../assets/property/Events/college_party.jpg';
import p6 from '../../assets/property/Events/corporate-event.webp';
import p7 from '../../assets/property/Events/DJ-Arrangements.webp';
import p8 from '../../assets/property/Events/engagement.webp';
import p9 from '../../assets/property/Events/New_Year_Party.jpg';
import p10 from '../../assets/property/Events/Outdoor_Party.jpg';
import p11 from '../../assets/property/Events/school_parties.jpg';




const OurProperties = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7 , p8 , p9 , p10 , p11];

  return (
    <div className="py-16" id='properties'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center font-bold mb-10"
        style={{ color: 'hsl(var(--color-text))' }}
      >
       Our Events
      </motion.h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.05 }}
            className="mb-4 overflow-hidden rounded-xl cursor-pointer"
          >
            <motion.img
              src={img}
              alt="Property"
              className="w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProperties;
