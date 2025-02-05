import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import svj3 from "../../assets/svj3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={profile_img} alt="" /> */}
      <img src={svj3} alt="" />
      <h1>
        <span>I'm Sabare vijay</span>
        ,Fullstack developer
      </h1>
      <p>
        
      A passionate Full-Stack Developer committed to creating seamless and dynamic digital experiences. With expertise in JavaScript, React, and Node.js, I specialize in developing responsive, user-friendly, and well-performance applications. Driven by a love for problem-solving, I transform ideas into reality through clean, efficient code and innovative design.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={100} href="#contact">
            <p onClick={() => setMenu("contact")}></p>Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            target="blank"
            href="https://drive.google.com/file/d/1N1dRfhL8xHPU2n2W1V_-thsX5wsBImMK/view?usp=sharing"
          >
            {" "}
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
