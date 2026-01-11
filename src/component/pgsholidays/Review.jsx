import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      rating: 5,
      comment:"We had an amazing experience with PGS Holidays. From the moment we booked till the end of the trip, everything was perfectly organized. Best prices in town, excellent coordination, comfortable stay, tasty food, and very friendly staff. The guide and driver were very professional and supportive throughout the trip. Highly recommended for couples, families, and group tours. Will definitely book again! "
    },
    {
      id: 2,
      rating: 5,
      comment: "PGS Holidays truly focuses on customer experience rather than profit. The package included everything as promised – stay, food, sightseeing, boating, and a comfortable AC car. Everything was smooth and stress-free. Their response time is very quick and the team is available anytime. One of the best holiday companies I’ve come across. 100% satisfied!"
    },
    {
      id: 3,
      rating: 5,
      comment:"We had a wonderful experience with PGS Holidays. Right from booking to the end of the trip, everything was well planned and smoothly executed. The pricing was very reasonable, the stay was comfortable, the food was good, and the overall coordination was excellent. The driver and guide were friendly and supportive throughout the journey. Highly recommended for families and group trips."
    },
    {
      id: 4,
      rating: 5,
      comment:"PGS Holidays made our trip completely stress-free and enjoyable. All arrangements were handled perfectly, including accommodation, food, sightseeing, and local travel in a comfortable AC vehicle. The team was always reachable and very responsive. Their focus on customer satisfaction really stands out. Truly a reliable and professional holiday planner."
    },
    {
      id: 5,
      rating: 5,
      comment: "One of the best travel experiences we’ve had, thanks to PGS Holidays. The package was well organized with no hidden costs, and everything was delivered exactly as promised. Great service, friendly staff, and smooth coordination throughout the trip. Ideal choice for couples, families, and friends planning a hassle-free vacation. Would definitely book again!"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div
      className="relative py-10 px-4 overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--color-bg))' }}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 border"
            style={{
              borderColor: 'hsl(var(--color-primary) / 0.2)',
              backgroundColor: 'hsl(var(--color-primary) / 0.05)'
            }}
          >
            <Quote className="w-5 h-5" style={{ color: 'hsl(var(--color-primary))' }} />
            <span
              className="text-sm font-semibold tracking-wider"
              style={{ color: 'hsl(var(--color-primary))' }}
            >
              GOOGLE REVIEWS
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'hsl(var(--color-text))' }}
          >
            What Our <span style={{ color: 'hsl(var(--color-primary))' }}>Guests Say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="w-full"
            >
              <div className="max-w-3xl mx-auto">
                <div
                  className="p-12 rounded-3xl border relative"
                  style={{
                    borderColor: 'hsl(var(--color-border))',
                    backgroundColor: 'hsl(var(--color-bg) / 0.7)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="absolute top-8 left-8">
                    <Quote
                      className="w-12 h-12 opacity-10"
                      style={{ color: 'hsl(var(--color-primary))' }}
                    />
                  </div>

                  <div className="flex gap-1 mb-8 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-current"
                        style={{ color: 'hsl(var(--color-primary))' }}
                      />
                    ))}
                  </div>

                  <p
                    className="text-sm italic text-center leading-relaxed"
                    style={{ color: 'hsl(var(--color-text))' }}
                  >
                    "{reviews[currentIndex].comment}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border"
              style={{ borderColor: 'hsl(var(--color-border))' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'scale-125' : ''}`}
                  style={{
                    backgroundColor:
                      index === currentIndex
                        ? 'hsl(var(--color-primary))'
                        : 'hsl(var(--color-text) / 0.2)'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border"
              style={{ borderColor: 'hsl(var(--color-border))' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
