import React from "react";
import { Logos } from "../../Logo";
import "./style.css"
const Skills = () => {
  return (
    <div className="skill" id="skills">
      <div className="skill-2">
        <h1 >Skills </h1>
        <div className="skill-icon">
          {Logos.map((item) => (
            <div key={item.id} className="logo">
              <img src={item.img} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
