import React from 'react'
import './Learning.css'
const Learning = () => {
  return (
    <>
    <div className='main-container'>
        <header className="heading">
            <h1 className='h1'>You got <span className="color-pink">your goals</span>, we got <span className="color-purple">the tools</span></h1>
        </header>
            <span><p className='pera'>Giving the best learning experience possible</p></span>
      <ul>
        <li className='align-right'>
        <div className="text text-right">
            <h2 className='color-pink'>self paced learning</h2>
            <p className='color-grey'>Pause rewind & control playback speed when needed</p>
        </div>
        <div className="text-logo">
        <i className='fa-solid fa-play color-pink'></i>
        </div>
        </li>
        <li className='align-left'>
        <div className="text-logo">
        <i className='fa-solid fa-clock color-gold'></i>
        </div>
        <div className="text text-left">
            <h2 className='color-gold'>self paced learning</h2>
            <p className='color-grey'>Pause rewind & control playback speed when needed</p>
        </div>
        </li>
        <li className='align-right'>
        <div className="text text-right">
            <h2 className='color-purple1'>self paced learning</h2>
            <p className='color-grey'>Pause rewind & control playback speed when needed</p>
        </div>
        <div className="text-logo">
        <i className='fa-solid fa-keyboard color-purple1'></i>
        </div>
        </li>
        <li className='align-left'>
        <div className="text-logo">
        <i className='fa-regular fa-comments color-purple'></i>
        </div>
        <div className="text text-left">
            <h2 className='color-purple'>self paced learning</h2>
            <p className='color-grey'>Pause rewind & control playback speed when needed</p>
        </div>
        </li>
        <li className='align-right' style={{float:'right'}}>
        <div className="text text-right">
            <h2 className='color-yellow'>self paced learning</h2>
            <p className='color-grey'>Pause rewind & control playback speed when needed</p>
        </div>
        <div className="text-logo">
        <i className='fa-solid fa-user-graduate color-yellow'></i>
        </div>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Learning
