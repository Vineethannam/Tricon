import React from 'react';
import './Reviews.css';

const Reviews = ({details}) => {
  return (
    <>

    <div className={details.wrapper}>
    <div className="content">
    <div className="image">
        <img src={details.image} alt="" />
    </div>
    <div className="matter">
       <p className='color-grey'>{details.content}</p><br />
       <div className="name-section">
        <h1 className={details.color}>{details.name}</h1>
       &nbsp; <cite className={details.color}>( 
       <i className={details.icon}></i>
         )
       </cite>
       </div> 
    </div>
    </div> 
    </div>

    </>
  )
}

export default Reviews
