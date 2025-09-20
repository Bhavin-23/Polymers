import React from "react";
import { motion } from "framer-motion";

const KeyApprovals = () => {
  const logos = [
    { src: "/ENGINEERS INDIA LTD.png", alt: "Engineers India Limited" },
    { src: "/ENGINEERS INDIA LTD.png", alt: "LEA" },
    { src: "/ENGINEERS INDIA LTD.png", alt: "Approval Logo 3" },
    { src: "/ENGINEERS INDIA LTD.png", alt: "Approval Logo 4" },
    { src: "/ENGINEERS INDIA LTD.png", alt: "Delhi Metro" },
    { src: "/ENGINEERS INDIA LTD.png", alt: "Jaipur Metro" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24"
      style={{ backgroundImage: "url('/Rectangle 122.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          className="text-white text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading with circle and line */}
          <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Key Approvals
            </h2>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full inline-block"></span>
            <span className="w-12 sm:w-16 h-px bg-white"></span>
          </div>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Trusted by builders and architects across India, Yahska Polymers has
            contributed to major residential, commercial, and infrastructure
            projects.
          </p>
        </motion.div>

        {/* Right Side Logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-md p-3 sm:p-4 md:p-6 flex items-center justify-center shadow"
              variants={logoVariants}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-8 sm:max-h-10 md:max-h-12 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyApprovals;
