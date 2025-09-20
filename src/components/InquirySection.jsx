import { FaIndustry, FaClipboardList, FaUsers, FaBox } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InquirySection() {
    const stats = [
        { icon: <FaIndustry size={32} />, number: 22, label: "Industry Experience" },
        { icon: <FaClipboardList size={32} />, number: 1000, label: "Projects Delivered" },
        { icon: <FaUsers size={32} />, number: 500, label: "Trusted Clients" },
        { icon: <FaBox size={32} />, number: 5, label: "Product Categories" },
    ];

    return (
        <section className="max-w-7xl mx-auto -mt-20 px-4 sm:px-6 md:px-10 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 shadow-md bg-white">

            {/* Left Side Form */}
            <motion.div
                className="bg-green-700 text-white p-6 sm:p-8 md:p-10 relative"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }} // slowed down
            >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Need Our Expertise?</h2>
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full inline-block"></span>
                    <span className="w-12 sm:w-16 h-px bg-white"></span>
                </div>
                <p className="mt-2 text-base sm:text-lg md:text-xl">Connect with Yahska Polymers</p>

                <form className="mt-6 sm:mt-10 space-y-3 sm:space-y-4">
                    <motion.input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md text-black focus:outline-none text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <motion.input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md text-black focus:outline-none text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.input
                        type="tel"
                        placeholder="Phone"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md text-black focus:outline-none text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    <motion.select
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md text-black focus:outline-none text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <option>Project Type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                    </motion.select>
                    <motion.textarea
                        placeholder="How Can We Help?"
                        rows="4"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md text-black focus:outline-none text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    />
                    <motion.button
                        className="w-full sm:w-auto px-10 sm:px-20 py-2 sm:py-3 mt-4 sm:mt-6 bg-[#483c90] text-white font-medium hover:bg-[#362f75] transition-all clip-hex text-sm sm:text-base md:text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit
                    </motion.button>
                </form>
            </motion.div>

            {/* Right Side Stats */}
            <motion.div
                className="bg-white px-4 sm:px-6 md:px-10 py-10 sm:py-12 flex flex-col justify-center relative space-y-8 sm:space-y-12"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }} // slowed down
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-12 sm:gap-6 md:gap-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 * index }} // slowed down
                    >
                        <motion.div
                            className="bg-[#3c0c7c] text-white p-4 sm:p-10 rounded-full flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {stat.icon}
                        </motion.div>
                        <div>
                            <CountUp target={stat.number} />
                            <p className="text-sm sm:text-base md:text-lg">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}

                <div className="
                            absolute
                            bottom-0 left-1/2 -translate-x-0/2
                            sm:bottom-0 sm:right-0 sm:left-auto sm:translate-x-0
                            bg-[#3c0c7c] text-white
                            px-4 sm:px-16 py-2 sm:py-3
                            rotate-0 sm:rotate-90 origin-bottom-right
                            rounded-t-md
                            text-base sm:text-base md:text-lg"
                >
                    Our Success Stories
                </div>
            </motion.div>
        </section>
    );
}

// CountUp Component
function CountUp({ target }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, latest => Math.floor(latest));

    useEffect(() => {
        const controls = animate(motionValue, target, { duration: 4, ease: "easeOut" }); // slowed down
        rounded.onChange(v => {
            if (ref.current) ref.current.textContent = v + (target > 999 ? "+" : "");
        });
        return () => controls.stop();
    }, [target, motionValue, rounded]);

    return <h4 ref={ref} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3c0c7c]"></h4>;
}
