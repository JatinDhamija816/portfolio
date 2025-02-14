import { useContext } from "react";
import { motion } from "framer-motion";
import DarkModeContext from "../context/DarkModeContext";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  const projects = [
    {
      name: "Hospital Food Management",
      description:
        "A system for hospitals to manage patient diets, meal preparation, and deliveries. Admins can manage diet charts, staff, and riders, while staff and riders track and update tasks in real-time.",
      technologies: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/hospital-food-management",
    },
    {
      name: "Taskify - To-Do App",
      description:
        "A feature-rich MERN stack To-Do List app with JWT authentication, task management (CRUD), sorting, and a seamless mobile experience.",
      technologies: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      githubLink: "https://github.com/JatinDhamija816/taskify",
    },
    {
      name: "WordFlow - Blogging Platform",
      description:
        "A blogging platform for writing posts with rich text formatting, media uploads, and user interactions through likes and comments.",
      technologies: "React, Node.js, Express, MongoDB, Cloudinary, JWT",
      githubLink: "https://github.com/JatinDhamija816/word-flow",
    },
  ];

  return (
    <div
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-200 via-white to-blue-200 text-gray-900"
      }`}
    >
      <div className="py-20 max-w-4xl w-full">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </motion.h2>

        <div className="space-y-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 shadow-white/10"
                  : "bg-white shadow-gray-400/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold ">{project.name}</h3>

              {/* Project Description */}
              <p className="mt-2 text-lg text-gray-400">
                {project.description}
              </p>

              {/* Technologies Used */}
              <p className="mt-3 text-sm font-medium text-gray-400">
                <span className="font-semibold">Technologies:</span>{" "}
                {project.technologies}
              </p>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-500 hover:underline"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
