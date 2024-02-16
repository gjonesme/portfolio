import React from "react";
import "./App.css";
import { useState } from "react";
import classes from "./App.module.css";
import logo from "./logo.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavLink from "./components/NavLink";
import Sidebar from "./components/Sidebar";
import Employer from "./components/Employer";
import Project from "./components/Project";

import ExperienceSummary from "./components/ExperienceSummary";

function App() {
  console.log(logo);
  const employers = [
    "Heatcraft Refrigeration Products",
    "Georgia Tech - LCC",
    "Georgia Tech - CRC",
  ];
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const activeExperienceHandler = (index: number) => {
    console.log(index);
    setActiveExperience(index);
  };
  return (
    <div className={classes.App}>
      <div className={classes.TopBar}>
        <NavLink link="#about">About</NavLink>
        <NavLink link="#experience">Experience</NavLink>
        <NavLink link="#projects">Projects</NavLink>
        <NavLink link="#contact">Contact</NavLink>
        <a
          className={classes.Button}
          href="assets/Gary_Jones Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <Sidebar />
      <div className={classes.RightBar}>
        {/* <a>gjgaryjones0@gmail.com</a> */}
      </div>
      <div className={classes.Intro}>
        <h4>Hi, my name is</h4>
        {/* <span>Hi, my name is</span> */}
        {/* <span className={classes.Name}>Gary Jones.</span> */}
        <h2>Gary Jones.</h2>
        <h3 className={classes.Blurb}>
          I love solving challenging problems and learning new things.
        </h3>
      </div>
      <div className={classes.MainContent}>
        <div id="about" className={classes.Section}>
          <h1>About Me</h1>
          <div className={classes.AboutContent}>
            <div>
              <p>
                Hello! My name is Gary and I like to design, build, and create
                functional things. I have enjoyed creating through design of
                commercial-grade products, 3d printing, woodworking, and
                electronic hardware development.
              </p>
              <p>
                Over the last several years I have authored specifications for
                embedded electronic controller development. I have worked
                closely with both software and hardware developers to bring new
                products and features to market. More recently, I have started
                building digital experiences on my own. I find great
                satisfaction in creating with web-based technologies and hope to
                find a place where I can refine and grow my skills.
              </p>

              <p></p>
            </div>

            <img src={logo} width={"200rem"} height={"200rem"}></img>
          </div>
        </div>
        <div id="experience" className={classes.Section}>
          <h1>Where I've Worked</h1>
          <div className={classes.ExperienceContent}>
            <div className={classes.Employers}>
              <ul>
                {employers.map((employer, index) => (
                  <Employer
                    title={employer}
                    index={index}
                    handleActiveExperience={activeExperienceHandler}
                    activeIndex={activeExperience}
                  />
                ))}
              </ul>
            </div>
            <div className={classes.ExperienceSummaryList}>
              <div className={classes.ExperienceSummary}>
                {activeExperience === 0 && (
                  <ExperienceSummary
                    title="New Product Development Engineer"
                    company="Heatcraft"
                    companyLink="https://www.heatcraftrpd.com/"
                    range={"May 2016 - present"}
                  >
                    <ul>
                      <li>
                        Lead engineer tasked to redesign flagship product line
                        to meet energy efficiency and minimum global warming
                        potential targets
                      </li>
                      <li>
                        Product engineer supporting hardware and embedded
                        software engineering teams to develop insustry leading
                        controls technology
                      </li>
                      <li>
                        Developed and maintained various internal software tools
                        and applications used by vendors, engineers, and
                        internal sales staff
                      </li>
                    </ul>
                  </ExperienceSummary>
                )}
              </div>
              <div className={classes.ExperienceSummary}>
                {activeExperience === 1 && (
                  <ExperienceSummary
                    title="Facilitator"
                    company="Georgia Tech - Leadership Challenge Course"
                    companyLink="https://www.crc.gatech.edu/outdoor/lcc"
                    range={"July 2015 - May 2016"}
                  >
                    <ul>
                      <li>
                        Facilitated team and leadership development for students
                        and various corporate groups
                      </li>
                      <li>
                        Utilized high ropes course for individual and team
                        growth, led debriefs to add value to the experience
                      </li>
                    </ul>
                  </ExperienceSummary>
                )}
              </div>
              <div className={classes.ExperienceSummary}>
                {activeExperience === 2 && (
                  <ExperienceSummary
                    title="Building Supervisor"
                    company="Georgia Tech - Campus Recreation Center"
                    companyLink="https://crc.gatech.edu/home"
                    range={"April 2014 - August 2015"}
                  >
                    <ul>
                      <li>
                        Responsible for day-to-day operation of 300,000 sq-ft
                        facility and 40+ employees
                      </li>
                      <li>
                        Managed interaction and function across five separate
                        departments
                      </li>
                    </ul>
                  </ExperienceSummary>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className={classes.Section}>
          <h1>Projects</h1>
          <Project
            projectName="Spotify Clone"
            technologies={["React", "CSS", "Spotify API"]}
            imageSource="/images/Garify_Search.png"
            gitLink="https://github.com/gjonesme/Garify"
          >
            A front-end clone of the Spotify Web App that supports key browse
            features via the{" "}
            <a
              className={classes.TextLink}
              href="https://developer.spotify.com/documentation/web-api"
              target="_blank"
            >
              Spotify API
            </a>
            .
          </Project>
          <Project
            projectName="Cross-Stitch Builder"
            technologies={["React", "CSS", "Material UI"]}
            imageSource="/images/CrossStitchBuilder.png"
            gitLink="https://github.com/gjonesme/CrossStitchBuilder"
          >
            A web app that allows conversion of uploaded images to cross-stitch
            patterns through various filters, dithering algorithms, and
            convolution.
          </Project>
          <Project
            projectName="MMM-WeatherAlerts"
            technologies={[
              "Javascript",
              "CSS",
              "Nunjucks",
              "OpenWeatherMap API",
            ]}
            imageSource="/images/MMM-WeatherAlerts-default_example.png"
            gitLink="https://github.com/gjonesme/MMM-WeatherAlerts"
          >
            A custom module for the{" "}
            <a
              className={classes.TextLink}
              href="https://magicmirror.builders/"
              target="_blank"
            >
              MagicMirror<sup>2</sup>
            </a>{" "}
            open source smart mirror platform that allows users to visualize
            real-time weather alerts/emergencies.
          </Project>
        </div>
        <div id="contact" className={`${classes.Contact} `}>
          <h1>Reach Out</h1>
          <p>
            If you are curious about any projects in my portfolio, want to
            discuss any opportunities for me to contribute and further grow my
            skills, or just want to say "hi", I would love to connect.
          </p>
          <a className={classes.Button} href="mailto:gjgaryjones0@gmail.com">
            Say Hello
          </a>
        </div>
      </div>
      <div></div>
      <div className={classes.BottomBar}>
        <a href="https://github.com/gjonesme" target="_blank">
          Built by Gary Jones
        </a>

        <a href="https://v4.brittanychiang.com/" target="_blank">
          Site Layout and Design Inspired by Brittany Chiang
        </a>
      </div>
    </div>
  );
}

export default App;
