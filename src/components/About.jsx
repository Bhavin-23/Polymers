import React from 'react';
import { motion } from "framer-motion";

const About = () => {

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } },
  };

  return (
    <div className="text-[#4F4C88] bg-white py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-10">
      <motion.div 
        className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Side - Text Content */}
        <motion.div className="w-full lg:w-1/2">
          <motion.div className="mb-4 sm:mb-6 md:mb-8" variants={childVariants}>
            <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
              {/* Hide dots and line on mobile */}
              <span className="hidden sm:inline-block w-3 sm:w-4 h-3 sm:h-4 bg-[#4F4C88] rounded-full"></span>
              <span className="hidden sm:inline-block w-12 sm:w-16 h-px bg-[#4F4C88]"></span>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 sm:mt-4 relative inline-block">
              Welcome to Yahska Polymers Pvt Ltd
              <span className="block w-32 sm:w-64 h-px bg-[#4F4C88] mt-2 sm:mt-4"></span>
            </h2>
          </motion.div>

          <motion.p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed" variants={childVariants}>
            Yahska Polymers Pvt Ltd is a leading construction chemicals manufacturer
            based in Ahmedabad, proudly serving the Indian construction industry with
            innovative and reliable solutions for over two decades. As one of the leading
            names in the field, our mission is simple to build stronger, safer, and more
            sustainable structures through chemistry that performs.
            <br /><br />
            Founded with a vision to revolutionize the way India builds, we offer a
            comprehensive portfolio of high-quality construction chemicals including:
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8" variants={childVariants}>
            {[
              "Waterproofing Systems",
              "Industrial Flooring Solutions",
              "Repair & Rehabilitation Products",
              "Sealants & Bonding Agents"
            ].map((item, index) => (
              <motion.div key={index} className="flex items-center space-x-2 sm:space-x-3" variants={childVariants}>
                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center border-2 border-[#4F4C88] rounded-full text-[#4F4C88] font-bold">
                  ∨
                </span>
                <h4 className="text-sm sm:text-base md:text-lg">{item}</h4>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            className="px-12 sm:px-16 md:px-20 py-2 sm:py-3 bg-[#483c90] text-white font-medium hover:bg-[#362f75] transition-all clip-hex"
            variants={childVariants}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Side - Images */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]">
          <motion.img
            src="/Rectangle 80.png"
            alt="About Yahska Polymers"
            className="w-[200px] sm:w-[300px] md:w-[420px] h-[180px] sm:h-[300px] md:h-[380px] rounded-lg shadow-lg absolute top-0 right-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
          />

          <motion.img
            src="/Rectangle 81.png"
            alt="About Yahska Polymers"
            className="w-[200px] sm:w-[300px] md:w-[420px] h-[180px] sm:h-[300px] md:h-[380px] rounded-lg shadow-lg absolute bottom-0 left-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
          />

          <motion.img
            src="/Group 513.png"
            alt="About Yahska Polymers"
            className="w-24 sm:w-32 h-24 sm:h-32 rounded-lg shadow-lg absolute top-[40px] sm:top-[60px] left-[120px] sm:left-[180px] z-10"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 3, y: -3 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
          />
        </div>

      </motion.div>
    </div>
  );
};

export default About;
