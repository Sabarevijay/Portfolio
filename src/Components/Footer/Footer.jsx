import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-top">
            <div className="footer-left">
                <img src={footer_logo} alt="" />
                <h1>Sabare vijay</h1>
                <img className='logo' src={theme_pattern} alt="" />
                <p>I'm always excited to hear about new opportunities, collaborations, or simply to have a chat about technology and development. Feel free to connect with me</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div> */}
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2025 Sabare vijay K. All rights reserved.
        </p>
        
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
