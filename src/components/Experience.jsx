import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const Experience = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="experience"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-200 via-white to-blue-200 text-gray-900"
      }`}
    >
      <div className="py-20 max-w-4xl w-full">
        {/* Title with Glow Effect */}
        <motion.h2
          className="text-5xl font-extrabold relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Experience
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="mt-8 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m <span className="text-blue-400 font-semibold">Jatin Dhamija</span>
          , a Full Stack Developer skilled in building scalable applications
          using
          <span className="text-blue-400">
            {" "}
            React, React Native, Node.js, Firebase, and TypeScript
          </span>
          . Below is an overview of my latest experience.
        </motion.p>

        {/* Experience Card */}
        <motion.div
          className="mt-8 w-full max-w-3xl p-6 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer backdrop-blur-md bg-opacity-80 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400">
            React Native Developer - 3-Month Internship
          </h3>
          <p className="mt-3 text-lg text-gray-400">
            Developed a feature-rich mobile application, integrating Bluetooth,
            Wi-Fi, and real-time backend services.
          </p>

          {/* Key Achievements List */}
          <ul className="mt-4 text-left space-y-2 text-gray-400">
            {[
              "Implemented JWT authentication for secure user login.",
              "Built a multi-device management feature with Bluetooth & Wi-Fi.",
              "Designed a seamless onboarding process for wristband setup.",
              "Integrated Firebase Realtime Database for instant data sync.",
              "Utilized TypeScript for scalable and maintainable code.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
              >
                <span className="text-blue-400">●</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Reflection */}
        <motion.p
          className="mt-8 text-lg max-w-3xl leading-relaxed text-gray-300 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          This experience refined my expertise in **mobile development, API
          integration, and backend architecture**, helping me deliver
          high-quality solutions.
        </motion.p>

        {/* Floating Glow Effects */}
        {/* <div className="absolute bottom-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div> */}
        {/* <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div> */}
      </div>
    </div>
  );
};

export default Experience;
