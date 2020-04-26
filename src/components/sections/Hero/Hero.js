import React from 'react';
import './Hero.scss';
import { HEROCARDSLIST } from '../../../constants';
import HeroCard from '../../common/HeroCard/HeroCard';

function Hero() {
  return (
    <section className='hero-wrapper ' id="hero">
      <div className='hero flex-column align-items-center justify-content-center'>
        <h2 className='hero__title'>
          Lorem ipsum, dolor sit amet consectetur adipisici.
        </h2>

        <div className='hero__cards'>
          {HEROCARDSLIST.map((item) => (
            <HeroCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
