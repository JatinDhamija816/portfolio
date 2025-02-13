import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  const projects = [
    {
      name: "hospital-food-management",
      description:
        "A streamlined system for hospitals to manage patient diets, meal preparation, and deliveries. Admins can manage patients, diet charts, staff, and riders, while staff and riders can track and update task statuses in real-time. Built for efficiency and simplicity.",
      technologies:
        "Vite-React, Node.js, Express, MongoDB, JavaScript, JWT (Access & Refresh Tokens), Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/hospital-food-management",
    },
    {
      name: "taskify",
      description:
        "A feature-rich MERN stack To-Do List app with JWT-based authentication, task management (CRUD), sorting and mobile responsiveness. Built for efficiency and a seamless user experience.",
      technologies:
        "Vite-React, Node.js, Express, MongoDB, JavaScript, JWT (Access & Refresh Tokens), Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/taskify",
    },
    {
      name: "WordFlow",
      description:
        "A dynamic blogging platform that allows users to share thoughts, write posts with rich text formatting, upload images and videos, and interact through likes and comments. Features include post sorting by likes, comments, date, and topics, along with full CRUD functionality. Built to deliver an engaging and customizable user experience.",
      technologies:
        "JavaScript, Vite-React, Node.js, Express, MongoDB, Tailwind CSS, JWT (Access & Refresh Tokens), Cloudinary",
      githubLink: "https://github.com/JatinDhamija816/word-flow",
    },
  ];

  return (
    <div
      id="projects"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="py-16 px-7 md:max-w-screen-lg">
        {/* Section title with fade-in animation */}
        <motion.p
          className="text-3xl font-semibold py-10 underline text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ${
                darkMode ? "shadow-white" : "shadow-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Project title with hover effect */}
              <motion.h3
                className="text-2xl font-semibold hover:text-blue-400 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {project.name}
              </motion.h3>
              {/* Project description */}
              <motion.p className="mt-2 text-lg">
                {project.description}
              </motion.p>
              {/* Technologies */}
              <motion.p className="mt-2 text-sm text-gray-500">
                <strong>Technologies:</strong> {project.technologies}
              </motion.p>
              {/* GitHub link */}
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 hover:underline mt-3 block"
                whileHover={{ scale: 1.05 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
