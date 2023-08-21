import React from 'react'
import './navbar.css'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export const Navbar = () => {
  return (
    <section>
      <header className="header flex">

        <div className="logoDiv">
          <a href="" className="logo">
            <h1><MdTravelExplore className="icon"/>Travel.</h1>
          </a>
        </div>
        
        <div className="navbar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Package</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Login</a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
          </div>
        </div>
       <div className="toggleNavbar">
        <TbGridDots className="icon"/>
       </div>
      </header>
    </section>
  )
}
export default Navbar;