import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import Headers from "/assets/header.svg";
import Type from "../Type";

const About = () => {
  const [text, setText] = useState("I'M Aditya Tadas");

  useEffect(() => {
    const textElement = document.getElementById("text");
    let index = 0;

    const timer = setInterval(() => {
      if (index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 180);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="abouts" id="about">
      <Navbar />
      <div className="about-body vh-100 d-flex justify-content-between align-items-center">
        <div className="name">
          <h1>
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 id="text"></h1>
          <h1 style={{ width: "700px",color:"#8a5de4" }}>
            <Type/>
          </h1>
        </div>
        <div className="floating">
          <img src={Headers} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
