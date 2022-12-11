import React from 'react';

function CounterCard({ icon, count, title }) {
  return (
    <div className='col-lg-3 col-md-6'>
      <div className='stats-item d-flex align-items-center w-100 h-100'>
        {icon}
        <div>
          <span
            data-purecounter-start='0'
            data-purecounter-end={count}
            data-purecounter-duration='1'
            className='purecounter'
          ></span>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CounterCard;
