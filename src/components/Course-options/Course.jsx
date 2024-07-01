import React from 'react';
import './Course.css'
import { COURESOPTIONS } from '../../data';
import CouresContent from './CouresContent';

const Course = () => {
  return (
    <>
      <section className="course-options">
        <header className='header'>
            <h2><span className='color-pink'>Course, </span><span>Delivered </span><span className='color-yellow'>your way</span></h2>
            <p className='color-grey'>The right access model for every learner.</p>
        </header>
        <div className="course-content">
        {COURESOPTIONS.map((item)=>(
            <CouresContent key={item.heading} details={item}/>
        ))}
        </div>
        <div className="description">
          <h2 className="color-yellow">Not sure where to start ?</h2>
          <p className="color-yellow1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, repellat.</p>
          <h3 className="color-yellow">Explore paths <i className='fa-solid fa-arrow-right'></i></h3>
        </div>
      </section>
    </>
  )
}

export default Course
