import React from 'react';
import './Footer.css'

const Footer = () => {
  const icons= [
    { icon:'fa-brands fa-instagram',name:'instagram'},
    { icon:'fa-brands fa-facebook',name:'facebook'},
    { icon:'fa-brands fa-twitter',name:'twitter'},
    { icon:'fa-brands fa-linkedin',name:'linkedin'},
  ]
  return (
    <footer className='footer'  id='Learning'>
      <section className='section'>
        <div className="copyright">© Bala Bharath</div>
        <div className="icons">
          {icons.map(item=>(
            <i className={item.icon}></i>
          ))}
        </div>
        <div className="term-conditions">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
