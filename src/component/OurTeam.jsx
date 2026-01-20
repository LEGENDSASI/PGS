import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

import t1 from "../assets/OurTeam/1.PNG";
import t2 from "../assets/OurTeam/2.jpg";
import t3 from "../assets/OurTeam/3.png";
import t4 from "../assets/OurTeam/4.jpg";
import t5 from "../assets/OurTeam/5.jpg";
import t6 from "../assets/OurTeam/6.png";
import t7 from "../assets/OurTeam/7.jpg";
import sasikumar from '../assets/OurTeam/sashikumar.png'
import t8 from '../assets/OurTeam/iniyashri.jpg'


const OurTeam = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const teamMembers = [
    { id: 1, name: "Keerthika", role: "CEO & Managing Director", image: t1 },
    { id: 2, name: "Priya Soop", role: "Project Manager", image: t2 },
    { id: 4, name: "Shalini", role: "BDE & Tourist Guide", image: t4 , language : 'English, Tamil' },
    { id: 5, name: "Harini", role: "Business Development Executive", image: t5 },
    { id: 3, name: "Shafreen", role: "Tourist Guide", image: t3 , language : 'Hindi, English, Tamil, urdu, French' },
    { id: 7, name: "Akshai", role: "Tourist Guide", image: t7  , language : 'English, Tamil, Hindi'},
    { id: 7, name: "Iniyashre", role: "BDE / Tourist Guide", image: t8 , language : 'Tamil, English, Hindi, Telugu'},

    { id: 6, name: "Sasikumar", role: "Digital Marketing", image: sasikumar },
  ];


  const bottomBarVariants = {
    rest: { height: 64 },
    hover: { height: 130 },
  };

  return (
    <div className="py-14 px-4 bg-[hsl(var(--color-bg))]">
      <div className="max-w-7xl mx-auto">

  
        <div className="text-center mb-14">
        

          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[hsl(var(--color-primary))]">Team</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="
                relative group overflow-hidden
                bg-white 
                transition-shadow duration-500
                hover:shadow-2xl
              "
            >
              {/* IMAGE (STATIC) */}
              <div className="relative h-96 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

            
              <motion.div
                variants={bottomBarVariants}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="
                  absolute bottom-0 left-0 w-full
                  bg-white px-4 py-6
                  overflow-hidden
                  group-hover:bg-[hsl(var(--color-primary))]
                  transition-colors duration-500 text-center
                "
              >
                <h3 className="text-md font-bold uppercase tracking-wide group-hover:text-white">
                  {member.name}
                </h3>

                <p className="text-xs text-gray-600 group-hover:text-white/80">
                  {member.role}
                </p>

  <p className="text-xs text-gray-600 group-hover:text-white/80">
                  {member?.language}
                </p>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
