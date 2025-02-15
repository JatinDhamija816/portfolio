import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaCloud } from "react-icons/fa";
import {
  SiPostman,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { motion } from "framer-motion";

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext);

  const skillData = [
    { name: "JavaScript", icon: <FaJs size={30} />, category: "Frontend" },
    {
      name: "TypeScript",
      icon: <SiTypescript size={30} />,
      category: "Frontend",
    },
    { name: "React", icon: <FaReact size={30} />, category: "Frontend" },
    { name: "React Native", icon: <FaReact size={30} />, category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={30} />,
      category: "Frontend",
    },
    { name: "Node.js", icon: <FaNodeJs size={30} />, category: "Backend" },
    { name: "Express", icon: <SiExpress size={30} />, category: "Backend" },
    { name: "JWT", icon: <FaCloud size={30} />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={30} />, category: "Database" },
    { name: "Cloudinary", icon: <FaCloud size={30} />, category: "DevOps" },
    { name: "Git", icon: <FaGitAlt size={30} />, category: "Version Control" },
    { name: "Postman", icon: <SiPostman size={30} />, category: "Testing" },
  ];

  return (
    <div
      id="skills"
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
          Skills
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition transform hover:scale-110 duration-300 ${
                darkMode
                  ? "bg-gray-700 shadow-white/10"
                  : "bg-white shadow-gray-400/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-400 mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400 mt-2">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
