import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const listVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const footerColumns = [
    {
      title: "About Us",
      content: (
        <>
          <motion.img
            src="/Yahskha Polymers_Logo & Symbol (3) (1) 1.png"
            alt="Yahska Logo"
            className="my-4 w-32 sm:w-40 md:w-44 lg:w-48 mx-auto md:mx-0" // ✅ Responsive Logo
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <p className="text-sm leading-6 mb-4 text-center md:text-left">
            Yahska Polymers Pvt Ltd is a leading construction chemicals manufacturer
            based in Ahmedabad, proudly serving the Indian construction industry with
            innovative and reliable solutions for over two decades.
          </p>
          <div className="flex justify-center md:justify-start space-x-3">
            {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center w-10 h-10 bg-[#3c0c7c] text-white rounded-full hover:bg-white hover:text-[#3c0c7c] transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Quick Links",
      content: ["Home", "About Us", "Projects", "Products", "Media coverage", "Contact Us"],
    },
    {
      title: "Our Products",
      content: [
        "Admixtures", "Accelerators", "Misc Admixtures", "Integral Waterproofing",
        "Curing Compound", "Grouts", "Floor Hardeners", "Micro Silica",
        "Structural Bonding", "See All Products",
      ],
    },
    {
      title: "Our Project",
      content: [
        "High Speed Rail", "Metro & Rail", "Roads & Highways",
        "Buildings & Factories", "Other Projects", "See All Projects",
      ],
    },
  ];

  return (
    <footer className="bg-[#f9f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20">
        {footerColumns.map((col, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h3
              className="text-lg font-semibold text-[#3c0c7c] mb-2"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {col.title}
            </motion.h3>

            {/* Decorative Line */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-1 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-6 h-px bg-[#4F4C88]"></span>
              <span className="w-3 h-3 bg-[#4F4C88] rounded-full"></span>
              <span className="w-6 h-px bg-[#4F4C88]"></span>
            </motion.div>

            {/* If column has list content */}
            {Array.isArray(col.content) ? (
              <motion.ul
                className="space-y-2 text-sm"
                variants={listVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {col.content.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    whileHover={{ x: 5, color: "#6d3bcf" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#">▶ {item}</a>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              col.content
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom bar */}
      <motion.div
        className="bg-[#3c0c7c] text-white text-center py-4 text-xs sm:text-sm md:text-base"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © 2024 Yahska Polymers Private Limited. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
