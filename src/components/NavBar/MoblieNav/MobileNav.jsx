import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active":""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container">
        <img className='logo' src="./assets/images/tricons1.png" alt="" />
        <ul>
          <li>
            <a href="/"className='menu-item'>Home</a>
          </li>
          <li>
            <a href="/"className='menu-item'>Courses</a>
          </li>
          <li>
            <a href="/"className='menu-item'>Testimonials</a>
          </li>
          
          <li>
            <a href="/"className='menu-item'>About</a>
          </li>
          
          <button className='contact-btn'onClick={()=>{}}>
            Contact Us
          </button>
        </ul>
      </div>
    </div>
    </>
  )
}

export default MobileNav
