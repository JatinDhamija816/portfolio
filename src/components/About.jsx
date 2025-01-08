import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="about"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-2xl font-semibold py-10 underline">About</p>
        <div className="">
          <p className="py-2">
            Hello! I’m Jatin Dhamija, a dedicated Full Stack Developer with a
            strong passion for crafting modern, scalable web and mobile
            applications. I specialize in using technologies such as React,
            React Native, Node.js, Express, MongoDB, Firebase, TypeScript, and
            Tailwind CSS to create seamless digital experiences.
          </p>
          <p className="py-2">
            I hold a B.Tech in Computer Science and Engineering from Panipat
            Institute of Engineering and Technology. Recently, I completed a
            3-month internship where I played a key role in developing a mobile
            application using React Native for a startup. In this project, I
            transformed Figma designs into a fully functional app, integrating
            backend services and ensuring an optimal user experience.
          </p>
          <p className="py-2">
            My expertise extends to building responsive, user-friendly websites,
            where I tackle complex challenges by implementing efficient and
            scalable solutions. Whether it's frontend development or backend
            architecture, I aim to deliver products that not only meet
            functional requirements but also offer an intuitive and engaging
            user experience.
          </p>
          <p className="py-2">
            I’m constantly driven by the pursuit of learning and improving,
            always striving to stay updated with the latest industry trends to
            build innovative and high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
