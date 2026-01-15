import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Users, Calendar, Shield, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const services = [
    { 
      title: "Pondy Getaway Stays", 
      description: "Premium and comfortable accommodations in Pondicherry",
      icon: <Hotel className="w-6 h-6" />
    },
    { 
      title: "PGS Holidays", 
      description: "Your trusted partner for memorable trips and travel experiences",
      icon: <Users className="w-6 h-6" />
    },
    { 
      title: "PGS Events", 
      description: "Perfectly planned weddings, parties, and special celebrations",
      icon: <Calendar className="w-6 h-6" />
    },
    { 
      title: "Group Bookings", 
      description: "Seamless bookings for groups, trips, and events",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div
      className="py-20"
      id='about'
      style={{ backgroundColor: 'hsl(var(--color-bg))' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border"
            style={{
              borderColor: 'hsl(var(--color-primary) / 0.3)',
              backgroundColor: 'hsl(var(--color-primary) / 0.05)'
            }}
          >
            <Hotel
              className="w-4 h-4"
              style={{ color: 'hsl(var(--color-primary))' }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              ABOUT PGS GROUP
            </span>
          </motion.div>

          <h2
            className="text-4xl  md:text-5xl font-bold mb-6"
            style={{ color: 'hsl(var(--color-text))' }}
          >
         ABOUT 
            <span
              className=" ml-2"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
             US
            </span>
          </h2>

          <p
            className="text-lg  mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--color-text) / 0.8)' }}
          >
            PGS Group brings together stays, trips, and events under one trusted name.
            From premium accommodations in Pondicherry to memorable journeys and
            perfectly planned celebrations, we deliver complete experiences with
            comfort and reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border text-center"
              style={{
                borderColor: 'hsl(var(--color-border))',
                backgroundColor: 'hsl(var(--color-bg))'
              }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border"
                style={{
                  borderColor: 'hsl(var(--color-primary) / 0.3)',
                  backgroundColor: 'hsl(var(--color-primary) / 0.05)'
                }}
              >
                <div style={{ color: 'hsl(var(--color-primary))' }}>
                  {service.icon}
                </div>
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'hsl(var(--color-text))' }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm"
                style={{ color: 'hsl(var(--color-text) / 0.7)' }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div
              className="p-8 rounded-2xl border"
              style={{
                borderColor: 'hsl(var(--color-border))',
                backgroundColor: 'hsl(var(--color-bg))'
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: 'hsl(var(--color-text))' }}
              >
                Why Choose PGS Group?
              </h3>

              <div className="space-y-4">
                {[
                  "All-in-one solution for stays, trips, and events",
                  "Trusted local expertise in Pondicherry",
                  "Premium and comfortable accommodations",
                  "Personalized planning and dedicated support",
                  "End-to-end coordination for every experience"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 py-3"
                  >
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'hsl(var(--color-primary))' }}
                    />
                    <span style={{ color: 'hsl(var(--color-text) / 0.9)' }}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div
              className="p-8 rounded-2xl border"
              style={{
                borderColor: 'hsl(var(--color-border))',
                backgroundColor: 'hsl(var(--color-bg))'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center border"
                  style={{
                    borderColor: 'hsl(var(--color-primary) / 0.3)',
                    backgroundColor: 'hsl(var(--color-primary) / 0.05)'
                  }}
                >
                  <Shield
                    className="w-6 h-6"
                    style={{ color: 'hsl(var(--color-primary))' }}
                  />
                </div>

                <h3
                  className="text-2xl font-bold"
                  style={{ color: 'hsl(var(--color-text))' }}
                >
                  One Brand, Many Experiences
                </h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-8 py-4">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{ backgroundColor: 'hsl(var(--color-primary))' }}
                  />
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: 'hsl(var(--color-text) / 0.9)' }}
                  >
                    PGS Group unifies accommodation, travel, and event planning
                    into one seamless experience, ensuring quality, comfort,
                    and reliability at every step.
                  </p>
                </div>

                <p
                  className="text-lg leading-relaxed"
                  style={{ color: 'hsl(var(--color-text) / 0.8)' }}
                >
                  Share your requirements with us and our team will take care of
                  everything, from planning and coordination to execution,
                  delivering experiences you will always remember.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
