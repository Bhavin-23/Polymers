import React from 'react';
import { FaUser, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MediaCoverage11() {
    const articles = [
        {
            img: "/Rectangle 138.png",
            date: "Sep 06, 2023",
            title: "Innovative Solutions in Construction Chemicals by Yahska Polymers",
            author: "admin",
            comments: "20230 comments",
        },
        {
            img: "/Rectangle 138.png",
            date: "Aug 20, 2023",
            title: "Sustainable Practices Making Waves in Indian Construction",
            author: "admin",
            comments: "20230 comments",
        },
        {
            img: "/Rectangle 138.png",
            date: "Aug 10, 2023",
            title: "Yahska Polymers Featured for Innovative Product Line",
            author: "admin",
            comments: "20230 comments",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <motion.div
                    className="flex items-center gap-3 mb-4 md:mb-0"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Media Coverage</h2>
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#362f75] rounded-full inline-block"></span>
                    <span className="w-12 sm:w-16 h-px bg-[#362f75]"></span>
                </motion.div>

                <motion.button
                    className="px-6 sm:px-12 py-2 sm:py-3 bg-[#483c90] text-white font-medium hover:bg-[#362f75] transition-all clip-hex"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    See details
                </motion.button>
            </div>

            {/* Description */}
            <motion.p
                className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg max-w-full sm:max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Yahska Polymers Pvt. Ltd. has been recognized in top industry publications for their innovations,
                sustainable solutions, and impact on India's construction sector.
            </motion.p>

            {/* Articles Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {articles.map((article, idx) => (
                    <motion.div
                        key={idx}
                        className="border rounded-lg overflow-hidden shadow relative group transition"
                        variants={itemVariants}
                    >
                        {/* Image */}
                        <div className="overflow-hidden h-64 sm:h-60 md:h-68">
                            <motion.img
                                src={article.img}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                whileHover={{ scale: 1.12 }}
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 md:p-6 transition-colors duration-300 group-hover:bg-green-700 relative">
                            <motion.p
                                className="text-xs sm:text-sm md:text-sm text-gray-500 mb-2 group-hover:text-white"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {article.date}
                            </motion.p>

                            <motion.h3
                                className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-4 sm:mb-6 group-hover:text-white"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {article.title}
                            </motion.h3>

                            <motion.div
                                className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-12 group-hover:text-white"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="flex items-center gap-2 mb-1">
                                    <FaUser className="text-gray-500 group-hover:text-white" /> By {article.author}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaComment className="text-gray-500 group-hover:text-white" /> {article.comments}
                                </p>
                            </motion.div>

                            <motion.button
                                className="absolute bottom-4 sm:bottom-4 right-4 sm:right-4 px-6 sm:px-12 py-2 sm:py-2 bg-[#483c90] text-white font-medium 
                                group-hover:bg-white group-hover:text-black transition-all clip-hex44 text-xs sm:text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Read more
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
