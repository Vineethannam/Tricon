import React from 'react';
import './SocialMedia.css';
import { SOCIALMEDIA } from '../../data';

const SocialMedia = () => {
  return (
    <>
      <section className="social-media">
        <h2 className="heading">Follow us on&nbsp;<span className='color-pink'>our channel</span></h2>
        <div className="social-logos">
        {SOCIALMEDIA.map((item)=>(
            <i key={item.name}className={item.icon}/>
        ))}
        </div>
      </section>
    </>
  )
}

export default SocialMedia
