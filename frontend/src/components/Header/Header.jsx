import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className="header">
        
        <div className="hero-frame">
          <div id ="line-1" className="line">
            <ul className="">
              <li><span className="title-project">Tomato Social Club</span>
              <img src={assets.tomato_icon}  className="tomato-icon" /><span className="title-project">,</span></li>
              <li><span className="title-project">Pour Decisions</span>
              <img src={assets.tomato_icon} className="tomato-icon" /><span className="title-project">,</span></li>
              <li><span className="title-project">Dev Roast</span>
              <img src={assets.tomato_icon} className="tomato-icon" /><span className="title-project">,</span></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header
