import React from 'react'
import './Style.css'
import Github from '.././Github.svg'
import Twitter from '.././akar-icons_twitter-fill.svg'
import Gmail from '.././Gmail.svg'

export default function Contacts() {
  return (
    
        <div className="icons">
            <a href="https://github.com/bereket-molla"><img src={Github} alt="" /></a>
            <a href="https://twitter.com"><img src={Twitter} alt="" /></a>
            <a href="mailto: bam2243@columbia.edu"><img src={Gmail} alt="" /></a>
            
            
        </div>
    
  )
}
