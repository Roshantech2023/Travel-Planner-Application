import React from 'react'
import './Destination.css'

import Beach from '../../assets/candolimBeach.jpg'
import Tajmahal from '../../assets/TajMahal.webp'
import munnar from '../../assets/munnar.jpg'
import Shivatemple from '../../assets/Daksheswara.jpg'
import valparai from '../../assets/valparai.jpg'

function Destination() {
  return (
    <div className='destinations'>
         <div className='container'>
            <h1>All-Includes Resorts</h1>
            <p>Best Most Visited Tourist Places</p>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2'src={Beach} alt="/"/>
                <img src={Tajmahal} alt="/"/>
                <img src={munnar} alt="/"/>
                <img src={Shivatemple} alt="/"/>
                <img src={valparai} alt="/"/>
            </div>
         </div>
    </div>
  )
}

export default Destination