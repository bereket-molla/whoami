import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import parse from "html-react-parser";
import './Style.css'


export default function Slider({data}) {
  
    let title = data.title
    let disc = data.discription 
    let image = data.image
    let live = data.liveDemo
    let github = data.githubLink
    let techs = data.techs
    
    
    useEffect(() => {
      Aos.init({
        duration : 1000
      });
    }, []);
  

  return (
      <div className="main" data-aos = "fade-up">
               <div className="pro-right">
            <p className="pro-title">{title}</p>
            <div className="pro-tech">
                {
                    Object.values(techs).map((value, index) => {
                        return <p className="tags" key = {index}>{parse(value)}</p>
                    })
                }
            </div>
            <p className = "disc" >{parse(disc)}</p>
            <a href={github}>{github ? "Github Link" : ""}  </a>
            <a href={live}>{live ?   "Video Demo Here": "" }</a>
           
        </div>
      </div>
        

  )
}
