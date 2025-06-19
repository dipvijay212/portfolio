import React from "react";

import "./Skills.css"
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-desc">
        I possess a good foundation in both frontend and backend technologies,
        and I’m comfortable building full-stack applications using modern tools
        and frameworks.
      </p>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <div className="skill-icon"><FaCode size={40} /></div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <div className="skill-icon"><FaDatabase size={40} /></div>
          <h3>Backend</h3>
          <ul>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Mongoose</li>
            <li>REST API Integration</li>
            <li>Authentication & Validation</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Others */}
        <div className="skill-card">
          <div className="skill-icon"><FaTools size={40}/></div>
          <h3>Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>API Testing</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
