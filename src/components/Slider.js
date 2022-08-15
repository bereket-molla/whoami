import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
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
      <div className="main" data-aos = "zoom-in">
        <div className="pro-left">
            <img className = "project-image" src={image} alt=" Not Found" />
        </div>

        <div className="pro-right">
            <p className="pro-title">{title}</p>
            <div className="pro-tech">
                {
                    Object.values(techs).map((value, index) => {
                        return <p className="tags" key = {index}>{value}</p>
                    })
                }
            </div>
            <p className = "disc" >{disc}</p>
            <a href={github}>Github Link</a>
            <a href={github}>{live ||   ""}</a>
           
        </div>
      </div>
        

  )
}
