import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
      <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern } alt="" />
        </div>
        {/* <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}

        </div> */}
        <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="work-item" key={index}>
            <div className="work-card">
              {/* Front side (Image) */}
              <div className="work-front">
                <img src={work.w_img} alt={work.w_name} />
              </div>

              {/* Back side (Description) */}
              <div className="work-back">
                <h3>{work.w_name}</h3>
                <p>{work.w_desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



        {/* <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div> */}
      </div>
  )
}

export default Mywork