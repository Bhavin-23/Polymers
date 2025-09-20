import React from "react";
import { motion } from "framer-motion";

const TrustedConnections = () => {
  const partners = [
    "/2.L&T.png","/2.L&T.png","/2.L&T.png","/2.L&T.png",
    "/2.L&T.png","/2.L&T.png","/2.L&T.png","/2.L&T.png",
    "/2.L&T.png","/2.L&T.png","/2.L&T.png","/2.L&T.png",
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 font-sans">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Trusted Connections
        </motion.h1>

        <motion.div
          className="flex items-center justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="w-12 sm:w-16 h-px bg-[#4F4C88]"></span>
          <span className="w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-[#4F4C88] mx-2 sm:mx-4"></span>
          <span className="w-12 sm:w-16 h-px bg-[#4F4C88]"></span>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Trusted across India, Yahska Polymers supports landmark residential, <br />
          commercial, and infrastructure projects.
        </motion.p>
      </div>

      {/* Partner Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
        {partners.map((imgSrc, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg flex items-center justify-center p-2 sm:p-3 md:p-4 h-24 sm:h-28 md:h-32 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" }}
          >
            <motion.img
              src={imgSrc}
              alt={`Trusted Partner ${index + 1}`}
              className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-24 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustedConnections;
