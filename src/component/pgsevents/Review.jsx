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
      comment:'PGS Events truly knows how to create unforgettable celebrations. From planning to execution, everything was handled perfectly and stress-free. The themed setup, food stalls, and fun activities were exactly as promised. The team was very responsive and available at all times, making the entire event smooth and enjoyable. It felt more like celebrating with friends than working with an event company. Highly satisfied and highly recommended!'
    },
    {
      id: 2,
      rating: 5,
      comment:'We had an amazing experience with PGS Events for our family get-together. The coordination was excellent, the arrangements were well organized, and every detail was taken care of. The games and activities kept everyone engaged, and the food setup was fantastic. Very professional, friendly, and budget-friendly service. One of the best event management teams we’ve worked with. Will definitely book again for future events!'
    },
    {
      id: 3,
      rating: 5,
      comment:'PGS Events made our birthday celebration truly special. From creative decoration to group games and entertainment, everything was perfectly planned. The team managed the event end-to-end, allowing us to relax and enjoy every moment. Great concepts, quick response, and smooth execution. 100% satisfied with their service!'
    },
    {
      id: 4,
      rating: 5,
      comment: 'We booked PGS Events for a corporate event, and the experience was outstanding. The planning, activity coordination, and overall execution were seamless. The team was professional, punctual, and very supportive throughout the event. Excellent setup, engaging games, and well-managed food arrangements. Strongly recommended for both corporate and personal celebrations.'
    },
    {
      id: 5,
      rating: 5,
      comment:'PGS Events is the best choice for stress-free celebrations. We hosted a farewell party, and everything from décor to entertainment was handled beautifully. The team paid attention to every small detail and ensured the event ran smoothly. Great energy, creative ideas, and excellent service. Truly a memorable experience!'
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
