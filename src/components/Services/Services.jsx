import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const ServiceCard = ({ skill }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="services-format">
            <h3>{skill.s_no}</h3>
            <h2>{skill.s_name}</h2>
            <p>
                {isExpanded ? skill.s_desc : `${skill.s_desc.slice(0, 50)}...`}
            </p>
            <div className="services-readmore" onClick={() => setIsExpanded(!isExpanded)}>
                <p>{isExpanded ? "Read Less" : "Read More"}</p>
                <img src={arrow_icon} alt="" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s', width: '20px' }} />
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="services-container">
                {Services_Data.map((skill, index) => {
                    return <ServiceCard key={index} skill={skill} />
                })}
            </div>
        </div>
    )
}

export default Services
