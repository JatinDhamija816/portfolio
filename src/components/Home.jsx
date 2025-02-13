import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="p-10 text-center space-y-6">
        {/* Name with animation */}
        <motion.p
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Jatin Dhamija
        </motion.p>

        {/* Title with animation */}
        <motion.p
          className="text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Description with animation */}
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Building dynamic web and mobile solutions that blend design,
          performance, and scalability. I thrive on turning complex problems
          into clean, user-friendly experiences using the latest technologies.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
