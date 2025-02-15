import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";
// import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [text, setText] = useState("");
  const fullText = "Jatin Dhamija";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-b from-blue-200 via-white to-blue-200 text-gray-900"
      }`}
    >
      {/* Name with Typing Effect */}
      <motion.p
        className="text-5xl font-extrabold relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {text}
        </span>
        <motion.span
          className="inline-block text-blue-500"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.p>

      {/* Title */}
      <motion.p
        className="text-2xl text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Developer
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-lg max-w-2xl mx-auto mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I build modern, scalable web applications with clean UI and smooth user
        experiences. Passionate about problem-solving and bringing ideas to
        life.
      </motion.p>

      {/* Floating Connect Button */}
      {/* <motion.a
        href="#contact"
        className="fixed bottom-6 right-6 flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 text-lg font-semibold shadow-blue-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Connect <FaArrowRight className="ml-2" />
      </motion.a> */}

      <div className="absolute bottom-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
    </div>
  );
};

export default Home;
