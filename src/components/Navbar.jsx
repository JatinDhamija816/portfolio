import { useContext, useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "skills" },
    { id: 7, link: "education" },
    { id: 8, link: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-lg bg-opacity-50 ${
        darkMode ? "bg-gray-900/50 text-white" : "bg-white/50 text-gray-900"
      } shadow-lg transition-colors duration-500`}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth duration={500}>
          <p className="text-4xl font-mono font-bold cursor-pointer hover:italic transition">
            JD
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-lg font-medium uppercase transition hover:scale-110 hover:text-blue-500"
            >
              <Link to={link.link} smooth duration={500}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden cursor-pointer text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute top-0 right-0 w-64 h-screen p-6 flex flex-col items-center justify-center shadow-lg space-y-6 ${
              darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          >
            {/* Close Button (Inside Sidebar) */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {links.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                className="text-lg font-semibold uppercase cursor-pointer"
              >
                <Link
                  to={item.link}
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {item.link}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Mode Toggle (Desktop Position below Navbar) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed ${
          isOpen ? "top-20" : "top-20 md:top-20" // keep below navbar
        } right-6 p-3 rounded-full shadow-lg transition-transform z-20 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {darkMode ? (
          <FaSun size={20} className="text-yellow-400" />
        ) : (
          <FaMoon size={20} className="text-blue-500" />
        )}
      </motion.button>
    </nav>
  );
};

export default Navbar;
