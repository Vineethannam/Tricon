import React from 'react';
import './CouresContent.css';

const CouresContent = ({details}) => {
  return (
    <div className='maincard'>
      <ul>
        <li>
            <article className='cards'>
                <div className="logo">
                    <i className={details.icon}></i>
                </div>
                <div className="contents">
                    <div className="content-text">
                    <h1 className={details.hcolor}>{details.heading}</h1>
                    <p className={details.color}>{details.pera}</p>
                    </div>
                    <div className="btn">{details.btn}</div>
                </div>
            </article>
        </li>
      </ul> 
    </div>
  )
}

export default CouresContent
