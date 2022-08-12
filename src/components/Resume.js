import React from 'react'
import resume from './resume.json'

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
                      <p className = "res-title" >{value[0]}</p>
                    </div>
                    <div className="resume-right">
                      {
                      Object.values(value.slice(1)).map((text, index ) => {

                        return  <p key = {index} className = {text[0]}>{text.slice(2,)}</p>
                        
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
