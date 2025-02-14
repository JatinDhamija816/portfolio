import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { motion } from "framer-motion";

const Education = () => {
  const { darkMode } = useContext(DarkModeContext);

  const education = [
    {
      school: "Panipat Institute of Engineering and Technology, Haryana",
      course: "B.Tech (Computer Science and Engineering)",
      marks: "CGPA: 7.69",
      year: "2019 - 2023",
    },
    {
      school: "Arya Bal Bharti Public School, Panipat",
      course: "Class 12th (CBSE)",
      marks: "Percentage: 61.4%",
      year: "2017 - 2018",
    },
    {
      school: "Arya Bal Bharti Public School, Panipat",
      course: "Class 10th (CBSE)",
      marks: "CGPA: 6.6",
      year: "2015 - 2016",
    },
  ];

  return (
    <div
      id="education"
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-200 via-white to-blue-200 text-gray-900"
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
          Education
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </motion.h2>

        {/* Timeline Layout */}
        <div className="mt-8 relative border-l-4 border-blue-500 pl-6">
          {education.map(({ school, course, marks, year }, index) => (
            <motion.div
              key={index}
              className="relative mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-3 w-4 h-4 bg-blue-500 rounded-full"></div>

              {/* Card Content */}
              <div
                className={`p-6 rounded-xl shadow-lg transition transform hover:scale-105 duration-300 ${
                  darkMode
                    ? "bg-gray-800 shadow-white/10"
                    : "bg-white shadow-gray-400/30"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">{school}</h3>
                  <span className="text-sm sm:text-base text-gray-400">
                    {year}
                  </span>
                </div>
                <p className="text-base md:text-lg font-medium mt-2 text-left">
                  {course}
                </p>
                <p className="text-sm md:text-base text-gray-500 text-left">
                  {marks}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
