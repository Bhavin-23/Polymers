import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const UpcomingProject = () => {
  const { scrollY } = useViewportScroll();

  // scroll-based background zoom
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <motion.section
      className="relative bg-cover bg-center bg-no-repeat text-[#4F4C88]"
      style={{ backgroundImage: "url('/Rectangle 129.png')", scale }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#4F4C88]/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 font-sans">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Have an Upcoming Project?
          </motion.h1>

          <motion.div
            className="flex items-center justify-center mb-4 sm:mb-6 md:mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="w-12 sm:w-16 h-px bg-white max-w-xs"></span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white mx-2 sm:mx-4"></span>
            <span className="w-12 sm:w-16 h-px bg-white max-w-xs"></span>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-xl text-white leading-snug sm:leading-normal md:leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Partner with Yahska Polymers Pvt. Ltd. to power your project with advanced <br className="hidden sm:block" />
            construction chemical solutions that deliver strength, durability, and <br className="hidden sm:block" />
            sustainability.
          </motion.p>

          <motion.button
            className="px-12 sm:px-16 md:px-20 py-2 sm:py-3 md:py-3 mt-4 sm:mt-5 bg-white text-[#4F4C88] font-medium hover:bg-[#362f75] hover:text-white transition-all clip-hex text-sm sm:text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingProject;
