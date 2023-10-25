import node from "../assets/img/node-js.svg";
import react from "../assets/img/react.svg";
import express from "../assets/img/express.svg";
import javascript from "../assets/img/javascript.svg";
import python from "../assets/img/python.svg";
import "react-multi-carousel/lib/styles.css";
import figma from "../assets/img/figma.svg";
import nest from "../assets/img/nestjs.svg";
import mongo from "../assets/img/mongodb.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.jpeg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="wow zoomIn">
          <h2>my awesome skills</h2>

          <div className="skills">
            <div className="skill-text">
              <p>
                {/* I am dedicated to staying at the forefront of my field. 
                Here is a glimpse of my proficiency in various areas: */}
                I'm a versatile and passionate individual with a wide range of
                skills in the field of software engineering. Over the
                years, I've honed my abilities in various aspects of my work,
                and I'm always eager to learn and adapt to new challenges. Here
                are some of the key skills that define my professional journey:
              </p>
              <a
                href="https://drive.google.com/file/d/1wSuQNx0Ot-3Qpv009NayU82CI--m_Ur_/view?usp=sharing"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button>My Resume</button>
              </a>
            </div>
            <ul className="skillList">
              <li>
                <img src={python}></img>
              </li>
              <li>
                <img src={javascript}></img>
              </li>
              <li>
                <img src={react}></img>
              </li>
              <li>
                <img src={node}></img>
              </li>
              <li>
                <img src={express}></img>
              </li>
              <li>
                <img src={nest}></img>
              </li>
              <li>
                <img src={mongo}></img>
              </li>
              <li>
                <img src={bootstrap}></img>
              </li>
              <li>
                <img src={html}></img>
              </li>
              <li>
                <img src={css}></img>
              </li>
              <li>
                <img src={figma}></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
