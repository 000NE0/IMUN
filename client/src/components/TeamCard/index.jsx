import React from 'react';

function TeamCard({
  profile,
  tweetLink,
  fbLink,
  instaLink,
  linkedinLink,
  name,
  tag,
  description,
}) {
  return (
    <div
      className='col-lg-4 col-md-6 member'
      data-aos='fade-up'
      data-aos-delay='100'
    >
      <div className='member-img'>
        <img
          src={profile}
          className='img-fluid'
          alt=''
          style={{ width: '120%' }}
        />
        <div className='social'>
          <a href={tweetLink}>
            <i className='bi bi-twitter'></i>
          </a>
          <a href={fbLink}>
            <i className='bi bi-facebook'></i>
          </a>
          <a href={instaLink}>
            <i className='bi bi-instagram'></i>
          </a>
          <a href={linkedinLink}>
            <i className='bi bi-linkedin'></i>
          </a>
        </div>
      </div>
      <div className='member-info text-center'>
        <h4>{name}</h4>
        <span>{tag}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
