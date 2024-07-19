import React from 'react'
import './Hero.css'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_img from '../../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className="hero">
      <div className="heroleft">
             <h2>NEW ARRIVAL ONLY</h2>
             <div>
              <div className="hero_hand_icon">
                <p>New</p>
                    <img src={hand_icon} alt=""></img>
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
      </div>
      <div className="hero_latest_btn">
        <div>Latest Collecion</div>
        <img src={arrow_icon} alt="arrow"></img>
      </div>
      </div>
        <div className="heroright">
            <img src={hero_img} alt=""></img>
           
        </div>


    </div>
  )
}

export default Hero
