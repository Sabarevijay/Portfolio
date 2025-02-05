import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { toast } from "react-toastify";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c6b0b64e-9a94-4ce8-bc78-6df1a8c8bfbc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //   console.log("Success", res);
      // alert(res.message);
      event.target.reset();
      toast.success("E-mail sent successfully");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm always excited to hear about new opportunities, collaborations,
            or simply to have a chat about technology and development. Feel free
            to connect with me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>sabarevijay2001@gmail.com</p>{" "}
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9940892361</p>{" "}
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Tirupur,Tamilnadu</p>{" "}
            </div>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/Sabarevijay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={50} color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabare-vijay-k-8198309a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={50} color="#0077B5" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
