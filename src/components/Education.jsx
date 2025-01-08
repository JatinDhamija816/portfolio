import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Education = () => {
  const { darkMode } = useContext(DarkModeContext);

  const education = [
    {
      school: "Panipat Institute of Engineering and Technology, Haryana",
      course: "Bachelor of Technology (Computer Science and Engineering)",
      marks: "CGPA: 7.69",
      year: "(2019-2023)",
    },
    {
      school: "Arya Bal Bharti Public School, Panipat ",
      course: "Class 12th (CBSE)",
      marks: "Percentage: 61.4%",
      year: "(2017-2018)",
    },
    {
      school: "Arya Bal Bharti Public School, Panipat ",
      course: "Class 10th (CBSE)",
      marks: "CGPA: 6.6",
      year: "(2015-2016)",
    },
  ];
  return (
    <div
      id="education"
      className={`min-h-screen flex justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-2xl font-semibold py-10 underline">Education</p>
        <div className="space-y-5">
          {education.map(({ school, course, marks, year }, index) => (
            <div
              key={index}
              className={`w-full shadow-md p-5 rounded-lg md:w-full duration-200 hover:scale-105 ${
                darkMode ? "shadow-white" : "shadow-black"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between">
                <h1 className="font-bold text-lg pr-5">{school}</h1>
                <p className="">{year}</p>
              </div>
              <div className="mt-2">
                <h2 className="text-base md:text-lg">{course}</h2>
                <p className="">{marks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
