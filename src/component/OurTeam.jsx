import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Star, X } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

import t1 from "../assets/OurTeam/1.PNG";
import t2 from "../assets/OurTeam/2.jpg";
import divyaMaharajan from '../assets/OurTeam/dhivyaMaharajan.jpeg';
import t3 from "../assets/OurTeam/3.png";
import t4 from "../assets/OurTeam/4.jpg";
import t5 from "../assets/OurTeam/5.jpg";
import t6 from "../assets/OurTeam/6.png";
import t7 from "../assets/OurTeam/7.jpg";
import sasikumar from '../assets/OurTeam/sashikumar.png'
import t8 from '../assets/OurTeam/iniyashri.jpg'


const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewStats, setReviewStats] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchReviewStats();
  }, []);
  let baseUrl = import.meta.env.VITE_BACKEND_URI;
  const fetchReviewStats = async () => {
    try {
      const response = await fetch(`https://pgs-backend-l6ps.onrender.com/average-reviews`);
      const data = await response.json();
      setReviewStats(data);
    } catch (error) {
      console.error("Error fetching review stats:", error);
    }
  };

  const teamMembers = [
    { id: 1, name: "Keerthika", role: "CEO & Managing Director", image: t1 },
    { id: 2, name: "Priya Soop", role: "Project Manager", image: t2 },
    { id: 9, name: "Dhivya Maharajan", role: "Human Resource & Procurement", image: divyaMaharajan },
    { id: 4, name: "Shalini", role: "BDE & Tourist Guide", image: t4, language: 'English, Tamil' },
    { id: 5, name: "Harini", role: "Business Development Executive", image: t5 },
    { id: 3, name: "Shafreen", role: "Tourist Guide", image: t3, language: 'Hindi, English, Tamil, urdu, French' },
    { id: 7, name: "Akshai", role: "Tourist Guide", image: t7, language: 'English, Tamil, Hindi' },
    { id: 8, name: "Iniyashre", role: "BDE / Tourist Guide", image: t8, language: 'Tamil, English, Hindi, Telugu' },
    { id: 6, name: "Sasikumar", role: "Digital Marketing", image: sasikumar },
  ];

  const handleAddReview = (member) => {
    setSelectedMember(member);
    setRating(0);
  };

  const submitReview = async () => {
    if (rating === 0) {
      toast.error("Please select a rating!");
      return;
    }

    const loadingToast = toast.loading("Submitting review...");
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://pgs-backend-l6ps.onrender.com/add-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamMemberId: selectedMember.id,
          rating
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Review submitted successfully!", { id: loadingToast });
        setSelectedMember(null);
        fetchReviewStats(); // Refresh stats after submission
      } else {
        toast.error(`Error: ${data.message || "Failed to submit review"}`, { id: loadingToast });
      }
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to connect to the server.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  const bottomBarVariants = {
    rest: {
      height: window.innerWidth < 640 ? 80 : 64,
    },
    hover: { height: 120 },
  };

  const renderStars = (avgRating) => {
    return (
      <div className="flex items-center justify-center gap-1 mt-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={`${
              star <= Math.round(avgRating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">({avgRating})</span>
      </div>
    );
  };

  return (
    <div className="py-14 px-4 bg-[hsl(var(--color-bg))] relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[hsl(var(--color-primary))]">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
                className="
                  relative group overflow-hidden
                  bg-white 
                  transition-shadow duration-500
                  hover:shadow-2xl
                  rounded-lg
                "
              >
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
                    bg-white px-4 py-4
                    overflow-hidden
                    group-hover:bg-[hsl(var(--color-primary))]
                    transition-colors duration-500 text-center
                    flex flex-col justify-center
                  "
                >
                  <h3 className="text-md font-bold uppercase tracking-wide group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-white/80">
                    {member.role}
                  </p>
                  {member.language && (
                    <p className="text-xs text-gray-600 group-hover:text-white/80 mt-1">
                      {member.language}
                    </p>
                  )}
                </motion.div>
              </motion.div>

              <div className="mt-4 flex flex-col items-center">
                {reviewStats[member.id] ? (
                  renderStars(reviewStats[member.id].averageRating)
                ) : (
                  <p className="text-xs text-gray-400 mt-1 italic">No reviews yet</p>
                )}
                
                <button
                  onClick={() => handleAddReview(member)}
                  className="mt-3 w-full bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary))]/90 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-md active:scale-95"
                >
                  Add Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Popup Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[hsl(var(--color-primary))] mb-4">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Add Review for</h3>
                <p className="text-[hsl(var(--color-primary))] font-semibold">{selectedMember.name}</p>
              </div>

              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      size={32}
                      className={`transition-colors ${star <= (hoverRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                        }`}
                    />
                  </button>
                ))}
              </div>

              <button
                disabled={isSubmitting}
                onClick={submitReview}
                className={`w-full py-3 rounded-lg font-bold text-white transition-all ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[hsl(var(--color-primary))] hover:brightness-110 active:scale-95 shadow-lg"
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurTeam;
