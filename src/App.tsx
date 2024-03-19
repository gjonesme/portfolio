import React from "react";
import "./App.css";
import { useState } from "react";
import classes from "./App.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "./components/NavLink";
import Sidebar from "./components/Sidebar";
import Employer from "./components/Employer";
import Project from "./components/Project";

import ExperienceSummary from "./components/ExperienceSummary";

function App() {
  const employers = [
    "Heatcraft Refrigeration Products",
    "Georgia Tech - LCC",
    "Georgia Tech - CRC",
  ];
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const activeExperienceHandler = (index: number) => {
    setActiveExperience(index);
  };
  const hamburgerButtonClickHandler = () => {
    setActiveMenu((prevMenu) => !prevMenu);
  };

  const onLinkClickHandler = () => {
    setActiveMenu(false);
  };
  return (
    <div className={classes.App}>
      <div className={classes.TopBar}>
        <NavLink link="#about">About</NavLink>
        <NavLink link="#experience">Experience</NavLink>
        <NavLink link="#projects">Projects</NavLink>
        <NavLink link="#contact">Contact</NavLink>
        <a
          className={classes.StyledButton}
          href="assets/Gary_Jones Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className={classes.Hamburger}>
        <button
          className={classes.HamburgerButton}
          onClick={hamburgerButtonClickHandler}
        >
          <MenuIcon />
        </button>
      </div>

      {activeMenu && (
        <div className={classes.HamburgerMenu}>
          {/* <HamburgerExpanded></HamburgerExpanded> */}

          <ul>
            <li>
              <NavLink link="#about" activeMenuSetter={onLinkClickHandler}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink link="#experience" activeMenuSetter={onLinkClickHandler}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink link="#projects" activeMenuSetter={onLinkClickHandler}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink link="#contact" activeMenuSetter={onLinkClickHandler}>
                Contact
              </NavLink>
            </li>

            <li>
              <a
                className={classes.StyledButton}
                href="assets/Gary_Jones Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      <Sidebar />
      <div className={classes.RightBar}>
        {/* <a>gjgaryjones0@gmail.com</a> */}
      </div>
      <div className={classes.Intro}>
        <h4>Hi, my name is</h4>
        <h2>Gary Jones.</h2>
        <h3 className={classes.Blurb}>
          I enjoy solving problems, creating experiences, and learning new
          skills.
        </h3>
      </div>
      <div className={classes.MainContent}>
        <div id="about" className={classes.Section}>
          <h1>About Me</h1>
          <div className={classes.AboutContent}>
            <div className={classes.AboutSummary}>
              <p>
                As an experienced engineer, I design, build, and create products
                and tools that solve problems and enhance user experience. I
                utilize mediums including commercial product design, software
                engineering, 3D printing, woodworking, and electronic hardware
                development.
              </p>
              <p>
                Over the last several years of my career, I authored
                specifications for embedded electronic controller development,
                worked closely with both software and hardware developers to
                bring new products and features to market, and leveraged
                software tools to enhance internal processes. I also started to
                develop my coding skills and build digital experiences on my
                own. I find great satisfaction in building with web-based
                technologies and am looking for an opportunity to refine and
                grow my skills.
              </p>
              <p>Some technologies that I have been working with:</p>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
            <div className={classes.ImageContainer}>
              <img
                className={classes.ProfileImage}
                src={"images/IMG_3301.png"}
              ></img>
            </div>
          </div>
        </div>
        <div id="experience" className={classes.Section}>
          <h1>Where I've Worked</h1>
          <div className={classes.ExperienceContent}>
            <div className={classes.Employers}>
              <ul>
                {employers.map((employer, index) => (
                  <Employer
                    key={index}
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
                        Managed engineering and design updates for flagship
                        product line with $200+ million annual revenue to meet
                        energy efficiency targets and minimize global warming
                        potential
                      </li>
                      <li>
                        Designed and developed industry-leading controls
                        technology, created feature specification, and supported
                        hardware and embedded software engineering teams
                      </li>
                      <li>
                        Developed and continuously improved internal software
                        tools and applications to improve processes, optimize
                        data retrieval, and drive revenue
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
                        Managed employees across across five separate functional
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
              rel="noreferrer"
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
            A web app that converts uploaded images to cross-stitch patterns
            through various filters, dithering algorithms, and convolution.
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
              rel="noreferrer"
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
            discuss an opportunity, or just want to say hi, I would love to
            connect.
          </p>
          <a
            className={classes.StyledButton}
            href="mailto:gjgaryjones0@gmail.com"
            rel="noreferrer"
          >
            Say Hello
          </a>
        </div>
      </div>
      <div></div>
      <div className={classes.BottomBar}>
        <a href="https://github.com/gjonesme" target="_blank" rel="noreferrer">
          Built by Gary Jones
        </a>

        <a
          href="https://v4.brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
        >
          Site Layout and Design Inspired by Brittany Chiang
        </a>
      </div>
    </div>
  );
}

export default App;
