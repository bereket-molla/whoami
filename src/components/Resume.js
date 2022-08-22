import React from 'react'
import resume from './resume.json'
import parse from "html-react-parser";

export default function Resume() {
  console.log(resume.education)
  return (
    <div className="resume-container">
      <div className="flex">
      {
          Object.values(resume).map((value, index) => {
            
            // console.log(value.title)
            return <div className="resume-comp">
                   
                    <div className="resume-left">
                      <p className = "res-title" >{parse(value[0])}</p>
                    </div>
                    <div className="resume-right">
                      {
                      Object.values(value.slice(1)).map((text, index ) => {
                        let val = text.slice(2).toString()
                        return  <p key = {index} className = {text[0]}>{parse(val)}</p>
                        
                      })
                     }
                    </div>
                  </div>
          })
        }
        </div>
      

      <div className="resume-fixed">

      </div>
    </div>

  )
}
