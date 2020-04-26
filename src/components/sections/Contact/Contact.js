import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section className='contact-container' id='contact'>
      <div className='contact'>
        <div className='contact__content'>
          <h2>Contact us today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className='contact__form '>
          <form action='#'>
            <input type='email' placeholder='yourmail@gmail.com' />
            <button type='submit'>Contact Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
