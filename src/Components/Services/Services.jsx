import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data'; // Ensure this is correctly exported
import arrow_icon from '../../assets/arrow_icon.svg';

const Service = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Tech Stack</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="para">
      These are the few Technologies , languages and frameworks that i
      grind on a regular basis..
      </div>
      <div className="services-container">
        {services_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={`service ${index}`} />
        ))}
      </div>
      
    </div>
    
  );
};

export default Service;