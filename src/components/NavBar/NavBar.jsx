import React, { useState } from 'react'
import './NavBar.css'
import MobileNav from './MoblieNav/MobileNav';
import {Link} from 'react-scroll'


const NavBar = () => {
  const[openMenu, setOpenMenu] = useState(false);
  const toggleMenu = ()=>{
    setOpenMenu(!openMenu)
  };
  
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className="nav-content">
          <img className='logo' src="./assets/images/tricons1.png" alt="" />
          <ul>
            <li><Link className='menu-item'to="Home"smooth={true} offset={-140} duration={500}>Home</Link></li>
            <li><Link className='menu-item'to="Course" smooth={true} offset={-180} duration={500}>Coursers</Link></li>
            <li><Link className='menu-item'to="Testimonials" smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
            <li><Link className='menu-item'to="Learning" smooth={true} offset={-170} duration={500}>About</Link></li>
            {/* <li><a className='menu-item' href="/">Home</a></li> */}
            {/* <li><a className='menu-item' href="/">Coursers</a></li>
            <li><a className='menu-item' href="/">Testimonials</a></li>
            <li><a className='menu-item' href="/">About</a></li> */}
            
            <button className='contact-btn' onClick={()=>{}}>
              Contact
            </button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span className={"material-symbols-outlined"}
            style={{fontSize:"1.5rem"}}>
              {openMenu?"close":"menu"}
            </span>
          </button>

        </div>
      </nav>
    </>
  )
}

export default NavBar
