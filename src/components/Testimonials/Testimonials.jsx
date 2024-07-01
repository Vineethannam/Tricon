import React from 'react';
import './Testimonials.css';
import { TESTIMONIALS } from '../../data';
import Reviews from './Reviews';

const Testimonials = () => {
  return (
    
    <>
    <div id="Testimonials">
    <section className="testimonials-container" >
        <div className="testimonial-heading color-purple">
            <h1>Don't take <span className="color-pink">our word</span> for it! </h1>
                <h1>Hear what <span className="color-gold">our students are saying</span>.</h1>
        </div>
        <div className="testimonials-content">

        {TESTIMONIALS.map((item)=>(
            <Reviews key={item.name} details={item}/>
        ))}

        </div>
    </section> 
    </div>
    </>
  )
}

export default Testimonials
