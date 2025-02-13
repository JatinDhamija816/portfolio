import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const Experience = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="experience"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="py-16 px-7 md:max-w-screen-lg">
        {/* Title with fade-in animation */}
        <motion.p
          className="text-3xl font-semibold py-10 underline text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>

        <div className="space-y-6">
          {/* General introduction */}
          <motion.p
            className="py-4 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello! I’m Jatin Dhamija, a Full Stack Developer with expertise in
            modern web and mobile technologies. My experience spans across
            building scalable, efficient applications using tools like React,
            React Native, Node.js, Express, MongoDB, Firebase, TypeScript, and
            more.
          </motion.p>

          {/* React Native Mobile App Developer Internship */}
          <motion.div
            className="py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
              React Native Mobile App Developer - 3-Month Internship
            </h3>
            <motion.p
              className="py-2 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              During my internship at a startup, I took the lead on developing a
              full-featured mobile application using React Native, backed by
              Node.js, Express, Firebase, and TypeScript. The app integrates
              Bluetooth and Wi-Fi to connect wristbands and manage devices. Some
              of the key features and technologies I implemented include:
            </motion.p>
            <ul className="list-disc list-inside space-y-2">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Implemented JWT (JSON Web Token) for secure authentication,
                generating tokens to manage user login sessions and protect API
                endpoints.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                Built a user-friendly multi-device management feature that
                allows users to pair and manage multiple wristbands using
                Bluetooth and Wi-Fi connectivity.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                Designed a multi-step onboarding process for setting up
                wristbands, ensuring a smooth experience for users.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
              >
                Integrated Firebase Realtime Database to store and sync data
                across devices, ensuring real-time updates and seamless
                performance.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                Utilized TypeScript to maintain clean, strongly-typed code and
                improve scalability across both the frontend and backend.
              </motion.li>
            </ul>
          </motion.div>

          {/* Final reflection */}
          <motion.p
            className="py-4 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            This experience enhanced my skills in mobile development, API
            integration, and backend services. I thrive on solving technical
            challenges and delivering solutions that prioritize both
            functionality and user experience.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
