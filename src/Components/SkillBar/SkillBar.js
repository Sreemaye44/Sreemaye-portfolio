import React from "react";
import "./SkillBar.css";

const SkillBar = () => {
  return (
    <body className="text-white" id="skill">
      <div className="skills_section">
        <div className="skills_head">
          <h2>
            My <span>Skills</span>
          </h2>
        </div>

        <div className="skills_main">
          <div className="skill_bar">
            <div className="info">
              <p>Java Script / TypeScript</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>CSS/Tailwind/MUI</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>Angular</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="js"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>React js/Next JS</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="react"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>Node js (Express)</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="node"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>Mongo DB/ Moongoose</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <span className="mongo"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>MySql</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <span className="mongo"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>Git/Github/GitLab</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="mongo"></span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SkillBar;
