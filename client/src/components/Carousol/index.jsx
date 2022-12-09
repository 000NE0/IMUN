import React from 'react';
import BG from '../../assets/img/hero-carousel/banner.jpg';

function Carousol() {
  return (
    <div
      id='hero-carousel'
      className='carousel slide'
      data-bs-ride='carousel'
      data-bs-interval='5000'
    >
      <div className='carousel-item active'></div>
      <div
        className='carousel-item active'
        style={{ backgroundImage: `url(${BG})` }}
      ></div>
      <div
        className='carousel-item'
        style={{ backgroundImage: `url(${BG})` }}
      ></div>

      <a
        className='carousel-control-prev'
        href='#hero-carousel'
        role='button'
        data-bs-slide='prev'
      >
        <span
          className='carousel-control-prev-icon bi bi-chevron-left'
          aria-hidden='true'
        ></span>
      </a>

      <a
        className='carousel-control-next'
        href='#hero-carousel'
        role='button'
        data-bs-slide='next'
      >
        <span
          className='carousel-control-next-icon bi bi-chevron-right'
          aria-hidden='true'
        ></span>
      </a>
    </div>
  );
}

export default Carousol;
