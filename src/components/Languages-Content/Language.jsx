import React from 'react';
import './Language.css';

const Language = () => {
  return (
    <>
    <div className='container' id='Course'>
      <h1>Your <span className="spn1">goals</span>, our <span className="spn1">topics</span></h1> 
      <p className='p1'>Frontend | Backend | Database | Frameworks</p>
      <ul className='topics'>
        <li><img className='logo' src="./assets/images/c-.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/letter-c.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/java.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/python.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/js.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/mysql.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/mongo.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/html-5.png" alt="" /></li>
        <li><img className='logo' src="./assets/images/css-3.png" alt="" /></li>
        <li className='logo1'><img className='logo' src="./assets/images/atom.png" alt="" /></li>
      </ul>
      <h1>And many, many more!</h1>
    </div>
    </>
  )
}

export default Language
