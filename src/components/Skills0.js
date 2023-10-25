import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png";
import python from "../assets/img/python.svg";
import "react-multi-carousel/lib/styles.css";
import skill from "../assets/img/skill.svg";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="wow zoomIn">
          <h2>my awesome skills</h2>
          <div className="skill-text">
            <img src={skill}></img>
            <div>
              <p>
                I am dedicated to staying at the forefront of my field. Here is
                a glimpse of my proficiency in various areas:
              </p>
              <a
                href="https://drive.google.com/file/d/1wSuQNx0Ot-3Qpv009NayU82CI--m_Ur_/view?usp=sharing"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button>My Resume</button>
              </a>
            </div>
          </div>
        </div>
        <Carousel
        className="mySkills"
          partialVisible={true}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
        >
          <a href="https://github.com/wossenfekadie1993/Abarosh_using-Python/tree/main/abarosh_using_pygame" target="_blank"><img src={python}></img></a>
          <img src={meter1} ></img>
          <img src={python}></img>
          <img src={meter2}></img>
          {/* <img src={meter3}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img>
          <img src={python}></img> */}
          
        </Carousel>
       
      </div>
    </section>
  );
};
