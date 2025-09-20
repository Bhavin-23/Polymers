import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.4 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div className="relative min-h-screen flex items-center font-roboto overflow-hidden">
            {/* Background Image with continuous slow zoom */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/Rectangle 4.png')" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            {/* Content with stagger */}
            <motion.div
                className="relative z-10 text-white px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl flex flex-col items-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Small Heading */}
                <motion.div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 space-y-2 sm:space-y-0 sm:space-x-4 justify-start" variants={itemVariants}>
                    <h2 className="text-base sm:text-lg md:text-3xl lg:text-2xl font-bold text-left">
                        Welcome to Yahska Polymers Pvt Ltd
                    </h2>
                    <span className="hidden sm:inline-block w-4 h-4 bg-white rounded-full"></span>
                    <span className="hidden sm:inline-block w-16 h-px bg-white"></span>
                </motion.div>

                {/* Big Tagline */}
                <motion.p className="text-xl sm:text-2xl md:text-5xl lg:text-[50px] font-bold mb-6 sm:mb-8 leading-snug text-left" variants={itemVariants}>
                    Construction Chemicals You Trust <br /> Delivering Strength & Quality
                </motion.p>

                {/* Buttons */}
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-start" variants={itemVariants}>
                    <motion.button
                        className="px-12 sm:px-16 md:px-20 py-3 border-2 bg-white border-white text-black font-medium clip-hex text-sm sm:text-base md:text-lg"
                        whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Contact Us
                    </motion.button>

                    <motion.button
                        className="px-12 sm:px-16 md:px-20 py-3 bg-[#483c90] text-white font-medium clip-hex text-sm sm:text-base md:text-lg"
                        whileHover={{ scale: 1.1, y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Know More
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Slider Arrows */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 z-10">
                <motion.button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#483c90] text-white rounded shadow"
                    whileHover={{ scale: 1.2, rotate: 10, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    ❮
                </motion.button>
                <motion.button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#483c90] text-white rounded shadow"
                    whileHover={{ scale: 1.2, rotate: -10, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    ❯
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
