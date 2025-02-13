import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import {
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
    { name: "JavaScript", icon: <FaJs size={30} />, category: "" },
    {
      name: "TypeScript",
      icon: <SiTypescript size={30} />,
      category: "",
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
    { name: "MongoDB", icon: <SiMongodb size={30} />, category: "Databases" },
    { name: "Cloudinary", icon: <FaCloud size={30} />, category: "Others" },
    { name: "Git", icon: <FaGitAlt size={30} />, category: "Others" },
    { name: "Postman", icon: <SiPostman size={30} />, category: "Others" },
  ];

  return (
    <div
      id="skills"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <motion.p
          className="text-3xl font-semibold py-10 underline text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-5 shadow-md rounded-lg flex flex-col items-center text-center transform transition hover:scale-105 duration-300 ${
                darkMode ? "shadow-white" : "shadow-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-blue-500 mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm mt-2">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
