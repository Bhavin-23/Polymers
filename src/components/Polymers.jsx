import React from "react";
import { motion } from "framer-motion";

const Polymers = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 font-sans">
      {/* Header Section */}
      <motion.div
        className="text-center mb-10 sm:mb-14 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Why Choose Yahska Polymers?
        </h1>

        {/* Divider with circle */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <span className="w-12 sm:w-16 h-px bg-[#4F4C88]"></span>
          <span className="w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-[#4F4C88] mx-2 sm:mx-4"></span>
          <span className="w-12 sm:w-16 h-px bg-[#4F4C88]"></span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          22+ years of trust, innovation, and quality delivering <br />
          construction chemical solutions that last.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "Expertise & Innovation",
            desc: "22+ years of industry experience with strong in-house R&D driving advanced and sustainable solutions.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            ),
          },
          {
            title: "Manufacturing Excellence",
            desc: "ISO-certified facilities with modern technology ensuring consistent quality and reliable supply nationwide.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            ),
          },
          {
            title: "Comprehensive Solutions",
            desc: "Wide product portfolio including admixtures, waterproofing, sealants, repairs, and industrial flooring for every construction need.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            ),
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="text-center p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md border border-transparent 
                       hover:border-4 hover:border-blue-500 hover:shadow-lg hover:-translate-y-2 
                       transform transition duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#4F4C88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Polymers;
