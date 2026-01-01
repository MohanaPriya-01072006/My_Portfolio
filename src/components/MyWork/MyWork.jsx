import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  }

  const visibleProjects = isExpanded ? mywork_data : mywork_data.slice(0, 6);

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />

      </div>
      <div className="mywork-container">
        {visibleProjects.map((Work, index) => {
          return <img key={index} src={Work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore" onClick={toggleShowMore}>
        <p>{isExpanded ? "Show Less" : "Show More"}</p>
        <img src={arrow_icon} alt="" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </div>
    </div>
  )

}

export default MyWork