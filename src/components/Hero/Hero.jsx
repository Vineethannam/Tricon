import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero-container" id='Home'>
        <div className="hero-left">
        <header>
            <h1>Learn to 
            <span className='sp1'> code.</span><br/>
            <span className='sp2'>Boost </span>
            your career.</h1><br />
            <p><a href="/" className='sp-btn' onClick={()=>{}}><span className='sp3'>Explore Courses</span> 
            <span  className='sp-arr'>→</span></a></p>
        </header>
        </div>
        <div className="hero-right">
            <ul>
                <li>
                    <article className="hero-right-content">
                        <i className="fa-solid fa-film hero-logo"></i>
                        <div className="hero-logo-content">
                            <h1>20 Courses</h1>
                            <p className='p1'>Choose your favorite from our collection of bestselling and 5 star rated courses.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="hero-right-content">
                    <i className="fa-solid fa-user hero-logo"></i>
                        <div className="hero-logo-content">
                            <h1>2500+ Students</h1>
                            <p className='p1'>You're in good company - We've taught more than 2500+ paying students!</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="hero-right-content hero-right-content1">
                    <i className="fa-solid fa-star hero-logo"></i>
                        <div className="hero-logo-content">
                            <h1>Top Rated</h1>
                            <p className='p1'>Our courses are rated 4.7 out of 5 stars over more than 2,000 reviews.</p>
                        </div>
                    </article>
                </li>
                
            </ul>
        </div>
      </div>
    </>
  )
}

export default Hero
