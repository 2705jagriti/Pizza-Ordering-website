import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> 

          </div>
          <button> Sing in </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
