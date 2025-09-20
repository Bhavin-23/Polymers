import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <PhoneIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#483c90]" />,
    title: "Call Us:",
    desc: "(+91) 88698 13222",
  },
  {
    icon: <EnvelopeIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#483c90]" />,
    title: "Mail Us:",
    desc: "admin@yahskapolymers.com",
  },
  {
    icon: <MapPinIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#483c90]" />,
    title: "Address:",
    desc: `Unit 1 - Changodar 
S. No 407, Khata No 1217, B/h Sarvodaya Hotel, 
Moraiya, Changodar, Ahmedabad - 382213`,
  },
  {
    icon: <MapPinIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#483c90]" />,
    title: "Address:",
    desc: `Unit 2 - Vatva 
C-1/212, Phase I, Nr Tiger Surgical, 
GIDC Vatva, Ahmedabad - 382445`,
  },
];

const ContactInfo = () => {
  return (
    <div className="w-full border-t border-b border-gray-300 py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-10 text-sm sm:text-base">
        {contactItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Icon */}
            <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
              {item.icon}
            </motion.div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                {item.title}
              </p>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
