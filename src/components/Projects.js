import React from 'react'
import Slider from './Slider'
import './Style.css'
import project from './projects.json'



export default function Projects() {

 
  let obj = project.projects
  return (

      <div className="project-main-container" >

        <p className = "small-pro-top"> {"0"  +obj.length + " Projects"} </p>
        <p className = "disc"> UPCOMING PROJECTS: <span>Circle</span> -- a social media application that enables new immigrants to the USA make smoother transions; It is an easy to use networking platform. Stay Tuned!</p> <br />
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
