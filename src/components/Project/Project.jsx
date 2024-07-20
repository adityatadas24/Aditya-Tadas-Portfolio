import React from "react";
import "./style.css";
const Project = () => {
  function finance() {
    window.open(
      "https://master--eclectic-truffle-8ea383.netlify.app/",
      "_blank"
    );
  }
  function podcast() {
    window.open("https://podcast-platform-website.netlify.app/", "_blank");
  }
  return (
    <div className="projects" id="project">
      {/* <h1>jnf</h1> */}
      <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1
          className="pro-heading mb-5"
          style={{
            marginTop: "10px",
            fontSize: "60px",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Projects
        </h1>
        <div className="scroll-container">
        <div className="project-data d-flex justify-content-center align-items-center gap-5">
          <div className="p-page">
            <div className="project-1" onClick={finance}></div>
            <h2 className="project-h2">Finance Tracker Website</h2>
            <div className="btns">
              <button onClick={finance}>Demo</button>
              <a
                href="https://github.com/adityatadas24/financly-tracker-project"
                target="_blank"
              >
                <button>Source</button>
              </a>
            </div>
          </div>
          <div className="p-page">
            <div className="project-2" onClick={podcast}></div>
            <h2 className="project-h2">Podcast Platform</h2>
            <div className="btns">
              <button onClick={podcast}>Demo</button>
              <a
                href="https://github.com/adityatadas24/podcast-platform-app"
                target="_blank"
              >
                <button>Source</button>
              </a>
            </div>
          </div>
          <div className="p-page">
            <div className="project-3"></div>
            <h2 className="project-h2">Crypto Currency Tracker</h2>
            <div className="btns">
              <button>Demo</button>
              <button>Source</button>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Project;
