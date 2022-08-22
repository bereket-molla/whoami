import React from 'react'
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useState } from 'react';

import './Style.css'


export default function Header() {
    let smallerText = ''
    let biggerText = ''
    

    let addr = window.location.pathname 
    conditionalText(addr.slice(1))

    const [dis, setDis] = useState([smallerText, biggerText]);
 
    function changeText(text) { 
      conditionalText(text)
      setDis([smallerText, biggerText])
    }

    function conditionalText(linkString){ 
      if(linkString === 'whoami' || linkString === ""){ 
        smallerText = `ሰላም <span>👋</span>  I am`
        biggerText = "Bereket·Molla"
    
      }
      else if(linkString === 'projects'){ 
        smallerText = `➷ Here are some of my`
        biggerText = "Projects"

      }
      else if(linkString === 'resume'){ 
        smallerText = `📄 My past experience`
        biggerText = "Resume"

      }
      else if(linkString === 'blogs'){ 
        smallerText = `This site is under construction. 🔨🛠`
        biggerText = "Coming·soon"

      }
      else{ 
        biggerText = "I am sorry"
      }
   
  }

  return (
    <div className="header wrapper">
      
        <div className="intro">
            <p className="smaller">{parse(dis[0])}</p>
            <p className="bigger">{dis[1]}</p>
        </div>
        <div className="menu">
            <Link className = "links" onClick={() => changeText('whoami')} to="whoami">{"{"}<span>whoami</span>{"}"}</Link>
            <Link className = "links" onClick={() => changeText('projects')} to="projects">{"{"}<span>projects</span>{"}"}</Link>
            <Link className = "links" onClick={() => changeText('resume')} to="resume">{"{"}<span>resume</span>{"}"}</Link>
      
             {/* <span className = "menu-icon">Menu</span> */}
            {/* <Link className = "links" onClick={() => changeText('blogs')} to="blogs">{"{"}<span>blogs</span>{"}"}</Link> */}
        </div>
       
       
    </div>
  )
}
