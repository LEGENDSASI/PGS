import React, { useEffect } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { SlSocialGoogle } from "react-icons/sl";

const ContactSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const cardStyle =
    "flex-1 basis-full md:basis-[48%] lg:basis-[30%]";

  const cardInner =
    "bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer h-full";

  return (
    <div className="min-h-screen bg-white font-poppins p-4 md:p-8">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Get In Touch With Us Now!
        </h1>
        <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Flex Layout */}
        <div className="flex flex-wrap gap-8 justify-center">

          {/* PHONE */}
          <a href="tel:+918072008376" className={cardStyle}>
            <div className={cardInner}>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Phone Number
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    +91 80720 08376
                  </p>
                  <p className="text-gray-600 mt-1">
                    Call us anytime during working hours
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* WORKING HOURS */}
          <div className={cardStyle}>
            <div className={cardInner}>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Working Hours
                  </h3>
                  <p className="text-gray-700">
                    Monday To Saturday
                    <br />
                    <span className="font-semibold text-gray-900">
                      24 hours open
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=No+6+100+Feet+Road+Saram+Pondy+605011"
            target="_blank"
            rel="noopener noreferrer"
            className={cardStyle}
          >
            <div className={cardInner}>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700">
                    No: 6, 100 Feet Road, Saram, Pondy 605011.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:pondygetawaystays@gmail.com"
            className={cardStyle}
          >
            <div className={cardInner}>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Email
                  </h3>
                  <span
                    className="font-semibold text-gray-900"
                    style={{ wordBreak: "break-all" }}
                  >
                    pondygetawaystays@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* GOOGLE REVIEW */}
          <a
            href="https://g.page/r/CcS4IJmWPlD9EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className={cardStyle}
          >
            <div className={cardInner}>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <SlSocialGoogle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Review Us
                  </h3>
                  <p className="text-gray-700">
                    Love our service? Share your experience with us on Google.
                    Your feedback helps others discover us and improves our
                    service.
                  </p>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
