import React from 'react';
import ChatBubbleCard from '../../common/ChatBubbleCard/ChatBubbleCard';
import { TESTIMONIALS } from '../../../constants';
import './Testimonials.scss';

function Testimonials() {
  return (
    <section className='testimonials flex-column align-items-center justify-content-center' id="solutions">
      <h2>Testimonials</h2>
      <div className='testimonials__boxes'>
        {TESTIMONIALS.map((item) => (
          <ChatBubbleCard
            key={item.content}
            content={item.content}
            author={item.author}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
