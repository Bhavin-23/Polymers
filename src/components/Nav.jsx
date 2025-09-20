import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#362f75]/90 shadow-lg" : "bg-[#483c90]"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between h-[80px] sm:h-[90px] md:h-[100px] px-4 sm:px-6 md:px-6 lg:px-0 lg:mr-5">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 clip-hex1"
        >
          <img
            src="Yahskha Polymers_Logo & Symbol (3) (1) 1.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 mr-4 sm:mr-6 md:mr-24 ml-2 sm:ml-4 md:ml-10"
          />
        </motion.div>

        {/* Desktop Menu → Show only on lg */}
        <ul className="hidden lg:flex items-center gap-4 sm:gap-6 lg:gap-16 text-white font-medium text-sm sm:text-base md:text-lg relative">
          {["HOME", "ABOUT US", "MEDIA COVERAGE", "CONTACT US"].map((item) => (
            <li key={item}>
              <motion.a
                whileHover={{ y: -2 }}
                className="relative group transition-colors duration-300 hover:text-yellow-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </motion.a>
            </li>
          ))}

          {/* Projects Dropdown */}
          <li className="relative">
            <motion.button
              onClick={() => toggleDropdown("projects")}
              whileHover={{ y: -2 }}
              className="relative group transition-colors duration-300 hover:text-yellow-300 text-sm sm:text-base md:text-lg"
            >
              PROJECTS ▾
            </motion.button>
            <AnimatePresence>
              {openDropdown === "projects" && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 mt-2 bg-[#483c90] rounded shadow-md text-sm sm:text-base min-w-[120px] sm:min-w-[150px] z-50"
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#5c4fb0] text-white">
                      Ongoing
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#5c4fb0] text-white">
                      Completed
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Products Dropdown */}
          <li className="relative">
            <motion.button
              onClick={() => toggleDropdown("products")}
              whileHover={{ y: -2 }}
              className="relative group transition-colors duration-300 hover:text-yellow-300 text-sm sm:text-base md:text-lg"
            >
              PRODUCTS ▾
            </motion.button>
            <AnimatePresence>
              {openDropdown === "products" && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 mt-2 bg-[#483c90] rounded shadow-md text-sm sm:text-base min-w-[120px] sm:min-w-[150px] z-50"
                >
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#5c4fb0] text-white">
                      Chemicals
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-[#5c4fb0] text-white">
                      Additives
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Hamburger Mobile + Tablet Menu → Show for all < lg */}
        <button
          className="lg:hidden text-white text-2xl sm:text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile + Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden bg-[#483c90] w-full overflow-hidden"
          >
            <ul className="flex flex-col gap-2 text-white p-4">
              {["HOME", "ABOUT US", "PROJECTS", "PRODUCTS", "MEDIA COVERAGE", "CONTACT US"].map(
                (item) => (
                  <li key={item} className="border-b border-white/20">
                    <a className="block py-2 text-sm sm:text-base">{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
