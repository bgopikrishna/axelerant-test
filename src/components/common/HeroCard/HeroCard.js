import React from 'react';

function HeroCard({ icon, title }) {
  return (
    <div className='hero__card flex-column justify-content-center align-items-center'>
      <i className={icon + ' has-text-primary'}></i>
      <h4>{title}</h4>
    </div>
  );
}

export default HeroCard;
