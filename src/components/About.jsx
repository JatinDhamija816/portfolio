import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-b from-blue-200 via-white to-blue-200 text-gray-900"
      }`}
    >
      <div className="py-20 max-w-4xl w-full">
        {/* Title with Neon Glow */}
        <motion.h2
          className="text-5xl font-extrabold relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </motion.h2>

        {/* About Paragraphs with Floating Animation */}
        <motion.p
          className="mt-8 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello! I’m{" "}
          <span className="text-blue-400 font-semibold">Jatin Dhamija</span>, a
          passionate Full Stack Developer skilled in crafting modern, scalable
          web and mobile applications. I work with{" "}
          <span className="text-blue-400">
            React, Node.js, Express, MongoDB, Firebase,React Native, JavaScript,
            TypeScript, and Tailwind CSS
          </span>
          .
        </motion.p>

        <motion.p
          className="mt-4 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I hold a{" "}
          <span className="text-purple-400 font-semibold">B.Tech in CSE</span>{" "}
          and have worked on building a full-fledged mobile app using React
          Native during a 3-month internship, bringing UI designs to life with
          backend integrations.
        </motion.p>

        <motion.p
          className="mt-4 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          My expertise includes developing intuitive interfaces and optimizing
          web performance for seamless user experiences.
        </motion.p>

        <motion.p
          className="mt-4 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Always exploring new technologies, I strive to create efficient,
          user-friendly applications that solve real-world problems.
        </motion.p>

        {/* Floating Glow Effect   side top right purple and middle blue  */}

        {/* <div className="absolute bottom-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div> */}
        {/* <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div> */}
      </div>
    </div>
  );
};

export default About;
