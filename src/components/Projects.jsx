import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  const projects = [
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
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-2xl font-semibold py-10 underline">Projects</p>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ${
                darkMode ? "shadow-white" : "shadow-black"
              }`}
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              <p className="mt-2">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 hover:underline mt-3 block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
