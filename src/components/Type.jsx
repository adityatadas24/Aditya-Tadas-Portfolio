import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "React.JS Developer",
          "MERN Stack Developer",
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
  );
}

export default Type;