import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import leetcodeLogo from "../assets/leetcode.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer
      className={`w-full z-50 backdrop-blur-lg transition-all duration-500 ${
        darkMode
          ? "bg-black shadow-md shadow-white text-white"
          : "bg-white/70 shadow-lg"
      }`}
    >
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Footer Text */}
        <motion.p
          className="text-sm mb-4 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Jatin Dhamija. All rights reserved.
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 md:space-x-8 items-center">
          {[
            {
              href: "mailto:jatindhamija025@gmail.com",
              icon: <FaEnvelope size={24} />,
              label: "Email",
            },
            {
              href: "https://github.com/JatinDhamija816",
              icon: <FaGithub size={24} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/jatin-dhamija-971309252",
              icon: <FaLinkedin size={24} />,
              label: "LinkedIn",
            },
            {
              href: "https://leetcode.com/u/jatindhamija025/",
              icon: (
                <img src={leetcodeLogo} alt="LeetCode" className="w-6 h-6" />
              ),
              label: "LeetCode",
            },
          ].map(({ href, icon, label }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-blue-500/20"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
