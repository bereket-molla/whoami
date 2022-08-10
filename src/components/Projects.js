import React from 'react'
import Slider from './Slider'
import './Style.css'
import project from './projects.json'

export default function Projects() {
  let obj = project.projects
  {Object.values(obj).map((value, index) => {
    return (
      <div className="project-main-container" key = {index}>
        <Slider val = {value}  />
      </div>
    );
  })}
  

}
