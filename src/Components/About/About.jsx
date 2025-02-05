import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
import svj3 from "../../assets/svj3.png";

const About = () => {
  return (
    
    <div id="about" className="about">
     
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
          <img src={svj3} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hi, I’m Sabare Vijay, a Full Stack Developer with a passion for building scalable and well-performance web applications. With a solid foundation in both front-end and back-end technologies. I’m driven by challenges, always focused on optimizing performance, enhancing workflows, and ensuring intuitive interfaces.
            </p>
            <p>
            I hold a Bachelor's degree in Mechatronics Engineering, graduating with a CGPA of 8.5%. This background allows me to bring a multidisciplinary approach to my work, blending engineering principles with modern web development practices.             
            </p>
            <p>Let's connect and build something impactful together!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JAVA SCRIPT</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>year of experience</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* <div className="about-achievement">
          <h1>0</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
   
  );
};


export default About;

