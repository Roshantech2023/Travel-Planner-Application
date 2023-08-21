import React,{useState} from 'react'
import './Navbarstyles.css'
import {BiSearch}from 'react-icons/bi'
import {BsPerson}from 'react-icons/bs'
import {HiOutlineMenuAlt4}from 'react-icons/hi'
import {AiOutlineClose}from 'react-icons/ai'
import {AiOutlineSearch}from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter}from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
const [nav,setNav]=useState(false)
const handleNav=()=>setNav(!nav)
  return (
    <div className={nav ? 'navbar navbar-bg':'navbar'}>
       <div className={nav ? 'logo dark':'logo'}>
         <h2>Beaches</h2>
       </div>
       <ul className="nav-menu">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>
        <li><form className='form'><input type="text" placeholder='enter destinations' />
        <button><AiOutlineSearch className='sarch-icon' /></button></form></li>
      </ul>
       <div className="nav-icons">
       <BiSearch className='icon' style={{marginRight:'1rem'}}/>
       <Link to="/login"><BsPerson className='icon'/></Link>
       </div>
       <Outlet/>
       <div className="hamburger" onClick={handleNav}>
        {!nav ? (<HiOutlineMenuAlt4 className='icon'/>) :<AiOutlineClose style={{color:'#000'}}className='icons' />}
       </div>
       <form className='mobile-form'><input type="text" placeholder='enter destinations' />
        <button><AiOutlineSearch className='sarch-icon' /></button></form>
       <div className={nav?'mobile-menu active':'mobile-menu'}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
            <div className="menu-icons">
                <button>Search</button>
                <button>Account</button>
            </div>
            <div className="social-icons">
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaLinkedinIn className='icon'/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar