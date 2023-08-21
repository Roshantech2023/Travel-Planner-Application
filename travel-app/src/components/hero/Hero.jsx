import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch}from 'react-icons/ai'

import video from '../../assets/travelvdo1.mp4'

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={video} type='video/mp4'/>
        </video>
        <div className="overlay"></div>
        <div className="content">
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations WorldWidely</h2>
        </div>
    </div>
  )
}

export default Hero