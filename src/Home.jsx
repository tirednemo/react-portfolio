import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import Project from "./Project";
import ProjectService from "./ProjectService";
import Timeline from "./Timeline";
import gif from './assets/marginalia-programming.gif';

import "./Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isSkillPopupVisible, setIsSkillPopupVisible] = useState(false);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(ProjectService.getAllProjects());
  });

  const onPrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const onNextClick = () => {
    setCurrentIndex(
      Math.min(currentIndex + 1, projectList.length - cardsToShow)
    );
  };

  const openSkillPopup = (skill) => {
    setSelectedSkill(skill);
    setIsSkillPopupVisible(true);
  };

  const onClosePopup = () => {
    setSelectedSkill("");
    setIsSkillPopupVisible(false);
  };

  return (
    <div>
      <section className="hero" id="hero">
        <img
          src={gif}
          loading="lazy"
          className="hero-gif"
        />
        <div className="bio">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="bio-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>
      </section>

      <section className="more-about" id="about">
        <h2 className="section-header">More About Me</h2>
        <p>
          I am a senior year CS undergrad passionate with development, anime,
          webtoon, ukulele, gaming.
        </p>
        <p>Lemme think</p>
        <p>Will write more after Im done with procrastinating</p>
      </section>

      <section className="skills" id="skills">
        <h2 className="section-header">Tech stacks I have worked with</h2>

        <div className="skills-container">
          <div>
            <img
              src="https://img.icons8.com/neon/96/web-design.png"
              alt="web-design"
              loading="lazy"
              onClick={() => openSkillPopup("Web Development")}
            />
            <img
              src="https://img.icons8.com/neon/96/android.png"
              alt="android"
              loading="lazy"
              onClick={() => openSkillPopup("App Development")}
            />
            <img
              src="https://img.icons8.com/neon/96/monitor.png"
              alt="monitor"
              loading="lazy"
              onClick={() => openSkillPopup("Desktop Development")}
            />
          </div>
          <div>
            <img
              src="https://img.icons8.com/neon/96/server.png"
              alt="server"
              loading="lazy"
              onClick={() => openSkillPopup("DevOps")}
            />
            <img
              src="https://img.icons8.com/neon/96/bot.png"
              alt="bot"
              loading="lazy"
              onClick={() => openSkillPopup("Data Science")}
            />
            <img
              src="https://img.icons8.com/neon/96/design.png"
              alt="design"
              loading="lazy"
              onClick={() => openSkillPopup("Graphics")}
            />
          </div>
        </div>
        {isSkillPopupVisible && (
          <Skill skillCategory={selectedSkill} onClosePopup={onClosePopup} />
        )}
      </section>

      <section className="projects" id="projects">
        <h2 className="section-header">Some of my Recent Projects</h2>
        <div className="projects-container">
          <button className="project-nav" onClick={() => onPrevClick()}>
            <img src="https://img.icons8.com/neon/48/chevron-left.png" />
          </button>
          {projectList &&
            projectList
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((i) => <Project key={i.id} project={i} />)}{" "}
          <button className="project-nav" onClick={() => onNextClick()}>
            <img src="https://img.icons8.com/neon/48/chevron-right.png" />
          </button>
        </div>
      </section>

      <section className="history" id="history">
        <h2 className="section-header">Timeline</h2>
        <div className="timeline-container">
          <Timeline></Timeline>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-header">Get In Touch With Me</h2>
        <div className="contact-container">
          <div className="contact-pic">
            <img src="https://www.lanceholtschool.wa.edu.au/wp-content/uploads/2018/05/generic-33-570-570x321.jpg" />
          </div>
          <div className="socials">
            <a href="mailto:" target="_blank">
              <img
                src="https://img.icons8.com/neon/96/gmail-new.png"
                alt="Gmail"
                loading="lazy"
                className="socicon"
              />
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/neon/96/linkedin.png"
                alt="Linkedin"
                loading="lazy"
                className="socicon"
              />
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank">
              <img
                src="https://img.icons8.com/nolan/96/github.png"
                alt="Github"
                loading="lazy"
                className="socicon"
              />
              Github
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
