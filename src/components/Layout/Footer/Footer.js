import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer flex-row justify-content-around'>
      <span>© 2019 All right reserved, Unicorn Inc</span>
      <span>
        follow us on &nbsp; <i className='fab fa-facebook-square'></i>
        &nbsp; <i className='fab fa-linkedin-in'></i>
      </span>
    </footer>
  );
}

export default Footer;
