import React from 'react'
import Slider from './Slider'
import './Style.css'
import project from './projects.json'



export default function Projects() {

 
  let obj = project.projects
  return (

      <div className="project-main-container" >
        {
          Object.values(obj).map((value, index) => {
            // console.log(value.title)
            return <Slider data = {value}  key = {index}/>
          })
        }
        {/* <div className="pagi">
        {
          Object.values(obj).map((value, index) => {
            // console.log(value.title)
            return <Slider data = {value}  key = {index}/>
          })
        }
        </div> */}
      </div>

  );
  

}
