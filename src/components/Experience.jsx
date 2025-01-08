import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Experience = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      id="experience"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <div className="py-10 px-7 md:max-w-screen-lg">
        <p className="text-2xl font-semibold py-10 underline">Experience</p>
        <div className="space-y-2">
          <p className="py-2">
            Hello! I’m Jatin Dhamija, a Full Stack Developer with expertise in
            modern web and mobile technologies. My experience spans across
            building scalable, efficient applications using tools like React,
            React Native, Node.js, Express, MongoDB, Firebase, TypeScript, and
            more.
          </p>

          <div className="py-4">
            <h3 className="text-xl font-semibold">
              React Native Mobile App Developer - 3-Month Internship
            </h3>
            <p className="py-2">
              During my internship at a startup, I took the lead on developing a
              full-featured mobile application using React Native, backed by
              Node.js, Express, Firebase, and TypeScript. The app integrates
              Bluetooth and Wi-Fi to connect wristbands and manage devices. Some
              of the key features and technologies I implemented include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span>
                  Implemented JWT (JSON Web Token) for secure authentication,
                  generating tokens to manage user login sessions and protect
                  API endpoints.
                </span>
              </li>
              <li>
                <span>
                  Built a user-friendly multi-device management feature that
                  allows users to pair and manage multiple wristbands using
                  Bluetooth and Wi-Fi connectivity.
                </span>
              </li>
              <li>
                <span>
                  Designed a multi-step onboarding process for setting up
                  wristbands, ensuring a smooth experience for users.
                </span>
              </li>
              <li>
                <span>
                  Integrated Firebase Realtime Database to store and sync data
                  across devices, ensuring real-time updates and seamless
                  performance.
                </span>
              </li>
              <li>
                <span>
                  Utilized TypeScript to maintain clean, strongly-typed code and
                  improve scalability across both the frontend and backend.
                </span>
              </li>
            </ul>
          </div>

          <p className="py-2">
            This experience enhanced my skills in mobile development, API
            integration, and backend services. I thrive on solving technical
            challenges and delivering solutions that prioritize both
            functionality and user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
