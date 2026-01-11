import React, { useEffect } from "react";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const ContactSection = () => {

       useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth', 
          })
        }, [])
        
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins p-4 md:p-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Get In Touch With Us Now!
                </h1>
                <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-8">
                        {/* Phone Number Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start">
                                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg mr-4">
                                    <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Phone Number</h3>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                        +91 80720 08376
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        Call us anytime during working hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start">
                                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg mr-4">
                                    <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        no,6 100 feet road saram Pondy 65011
                                        <br />

                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>

<div  className="space-y-8">
   <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                        <div className="flex items-start">
                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg mr-4">
                                <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Working Hours</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Monday To Saturday
                                    <br />
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        24 hours open
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
                        <div className="flex items-start">
                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg mr-4">
                                <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
                                  
                                  
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        Pondygetawaystays@gmail.com
                                    </span>
                            </div>
                        </div>
                    </div>
</div>
              
                 


                </div>


            </div>

            {/* Custom CSS for root colors */}
            <style jsx global>{`
        :root {
          --color-primary: 43 100% 46%;
          --color-primary-foreground: 0 0% 100%;
          --color-accent: 45 95% 60%;
          --color-accent-foreground: 222 47% 11%;
          --color-bg: 0 0% 100%;
          --color-text: 222 47% 11%;
          --color-border: 214 32% 91%;
        }

        .dark {
          --color-primary: 174 50% 50%;
          --color-primary-foreground: 0 0% 100%;
          --color-accent: 45 90% 55%;
          --color-accent-foreground: 222 47% 11%;
          --color-bg: 222 47% 11%;
          --color-text: 210 40% 98%;
          --color-border: 217 32% 17%;
        }

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