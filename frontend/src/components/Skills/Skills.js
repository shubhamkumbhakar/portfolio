import React from 'react'
import Development from './Development'
import Programming from './Programming'
import Interests from './Interests'
import './Skills.css'


const Skills = () => {
    return (
        <div id="skills">
            <div id="div"></div>
        <h1 className="headT">Skills</h1>
        <br/>
        <div id="skill">
           <div className="elem"><Development/></div>
           <div className="elem"><Programming/></div>
           <div className="elem"><Interests/></div>
        </div>
        </div>
    )
}

export default Skills
