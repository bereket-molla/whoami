import React from 'react'
import memeImage from '.././memeImageSecond.svg'

export default function WhoAmI() {
  return (
    <div className="whoami-container">
        <div className="left">
            <div className="code-container">
                <p>public String <span>{"whoami(){"}</span></p>
                <div className="code-inner">
                <p>{"// root"}</p>
                <p> <span>return </span> " Sophomore <span className = "cu">@Columbia University</span> <br />{"    studying"} <span className = "cs">Computer Science"</span> <span>;</span>
                </p>
                </div>
            <p><span>{"}"}</span></p>

            </div>
            <div className="bio-container">
            <p>I was born and raised in Ethiopia 🇪🇹 where had my most enjoyable time in my life. My love for computer science began in 2015, when I had a humble introduction to programming through visual basics. At the time I thought programming was some magic incantation. However, over the past 7 years I
            came to realize that computer science is a world full of math, logic, and questions. A world worth digging deep into!</p>
            </div>
        </div>
        <div className="right">
            <img src={memeImage} alt="" />
        </div>
        



        
    </div>
  )
}
