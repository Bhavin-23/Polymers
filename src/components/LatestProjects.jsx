import React from "react";
import { motion } from "framer-motion";

const LatestProjects = () => {
  const projects = Array(6).fill({
    img: "/Rectangle 107.png",
    title: "Fintech Towers at GIFT City, Ahmedabad",
    desc: "Yahska Polymers powered the Fintech Towers at GIFT City, Ahmedabad with durable and sustainable construction solutions.",
  });

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Latest Projects
        </motion.h1>

        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="w-16 h-px bg-[#4F4C88] max-w-xs"></span>
          <span className="w-5 h-5 rounded-full bg-[#4F4C88] mx-4"></span>
          <span className="w-16 h-px bg-[#4F4C88] max-w-xs"></span>
        </motion.div>

        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Showcasing projects where Yahska Polymers has enhanced residential, <br />
          commercial, and infrastructure works across India.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {["View All", "Buildings", "Factories", "Bullet", "Metro Rail", "Road Projects", "Others"].map((tab, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-[#4F4C88] text-[#4F4C88] font-medium transition-colors hover:bg-[#4F4C88] hover:text-white"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full h-px bg-gray-300 mb-12"></div>

      {/* Project Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            {/* Overlay content */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6 md:p-8
                         z-10 opacity-100 md:opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h4 className="text-white text-base sm:text-lg md:text-lg lg:text-2xl font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-white text-xs sm:text-sm md:text-sm lg:text-base mb-4">
                {project.desc}
              </p>

              {/* Button bottom-left */}
              <div className="self-start mt-auto">
                <motion.button
                  className="px-4 sm:px-6 py-1 sm:py-2 bg-white text-[#362f75] font-medium hover:bg-[#362f75] hover:text-white transition-all duration-300 clip-hex44 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
