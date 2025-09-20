import React from "react";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <section className="bg-white text-[#4F4C88]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 font-sans">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.h1>

          {/* Divider with circle */}
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

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            22+ years of trust, innovation, and quality delivering <br />
            construction chemical solutions that last.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-6">
          {[
            {
              title: "Admixtures",
              desc: "High-performance admixtures designed to improve concrete workability, strength, and durability while reducing water demand.",
            },
            {
              title: "Accelerators",
              desc: "Special additives that speed up the setting and strength gain of concrete, ideal for fast-track construction projects.",
            },
            {
              title: "Misc Admixtures",
              desc: "Specialty admixtures formulated to enhance specific concrete properties and meet unique project requirements.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 w-full overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Section */}
              <motion.div
                className="relative h-60 sm:h-64 md:h-72 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/Rectangle 92.png"
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="p-4 sm:p-6 md:p-8 text-left transition-colors duration-500 group-hover:bg-[#483c90] group-hover:text-white"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-gray-100 mb-4">
                  {card.desc}
                </p>
                <motion.button
                  className="px-8 sm:px-12 md:px-16 py-2 sm:py-3 font-medium transition-all clip-hex bg-[#483c90] text-white 
                             group-hover:bg-white group-hover:text-[#483c90]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More →
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
