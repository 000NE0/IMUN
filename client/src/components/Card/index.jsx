import React from 'react';
import PIC from 'assets/sns-logo/academy.jpg';

function Card({ link, title, description, logo }) {
  return (
    <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay='600'>
      <div className='service-item position-relative'>
        <div className='icon'>
          <img className='support-img' src={logo} alt='' />
        </div>
        <h3 className='support-text'>{title}</h3>
        <p>{description}</p>
        <a href={link} target='_blank' className='readmore stretched-link'>
          Learn more <i className='bi bi-arrow-right'></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
