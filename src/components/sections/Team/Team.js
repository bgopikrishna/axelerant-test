import React from 'react';
import './Team.scss';

function Team() {
  return (
    <section className='team' id='team'>
      <div className='team__content flex-column '>
        <h2>Meet Our Team</h2>
        <p>
          Our team is your team. When your mission is to be better, faster and
          smarter, you need the best people driving your vision forward. You
          need people who can create focused marketing strategies that align
          with business goals, who can infuse their creativity into
          groundbreaking campaigns, and who can analyze data to optimize every
          tactic along the way. You need Walker Sands. Get to know your team
          below
        </p>
      </div>

      <div className='team__banner'>
        <img
          src='https://source.unsplash.com/lbLgFFlADrY/800x400'
          alt='Team banner'
          className='team__banner__img'
        />
      </div>
    </section>
  );
}

export default Team;
