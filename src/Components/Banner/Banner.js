import React from "react";
import { Typewriter } from "react-simple-typewriter";
import sree from "../../assets/sree2.png";

const Banner = () => {
  return (
    <div className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-fuchsia-500 leading-relaxed">Hi, my name is</p>
        <h1 className="text-5xl font-bold text-teal-500 leading-relaxed">
          SREEMAYE CHAKRABORTTY
        </h1>
        <h2 className="text-fuchsia-500 text-5xl font-bold leading-relaxed">
          I'm a{" "}
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Software Engineer",
                "FullStack Developer",
                "React JS Expert",
                "Angular Developer",
                "Node JS Develoepr",
                "JavaScript Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-slate-300 py-4 max-w-[900px]">
          I’m a skilled full-stack developer with more than one year of
          professional experience in Angular, React, and Node.js. I build
          user-friendly websites by combining front-end and back-end
          technologies. I focus on writing top-notch code and enjoy working with
          teams to create innovative web solutions.
        </p>
        <div>
          <a href="#projects">
            <button class="mt-6 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-teal-300 hover:from-fuchsia-600 hover:via-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center animate-ping animate-bounce">
              Demo work ->
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
