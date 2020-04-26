import React, { useState } from 'react';
import './Navbar.scss';

function Navbar() {
  const [hamMenu, toggleHamMenu] = useState(false);

  const hamMenuClass = hamMenu
    ? 'nav__links flex-row align-items-start mobile active'
    : 'd-none';

  const handleHamMenu = () => toggleHamMenu((prevState) => !prevState);

  return (
    <div className='nav-wrapper w-100 flex-row justify-content-between align-items-center'>
      <div className='nav__logo flex-row justify-content-around align-items-center'>
        <i className='fas fa-horse nav__logo__icon'></i>
        <a href='/'>Unicorn Inc</a>
      </div>

      <ul className='nav__links flex-row align-items-center'>
        <li className='nav__item'>
          <a href='#team' className='nav__link'>
            About
          </a>
        </li>

        <li className='nav__item'>
          <a href='#team' className='nav__link'>
            Team
          </a>
        </li>
        <li className='nav__item'>
          <a href='#solutions' className='nav__link'>
            Solutions
          </a>
        </li>
        <li className='nav__item'>
          <a href='#contact' className='nav__link--cta'>
            <i className='far fa-comment-dots'></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>

      <a href='#' onClick={handleHamMenu} className='nav__link--cta  ham-menu'>
        <i className='fas fa-bars'></i>
      </a>

      {/**Mobile Nav */}
      <ul className={hamMenuClass}>
        <li className='nav__item'>
          <a href='#team' className='nav__link'>
            About
          </a>
        </li>

        <li className='nav__item'>
          <a href='#team' className='nav__link'>
            Team
          </a>
        </li>
        <li className='nav__item'>
          <a href='#solutions' className='nav__link'>
            Solutions
          </a>
        </li>
        <li className='nav__item'>
          <a href='#contact' className='nav__link--cta'>
            <i className='far fa-comment-dots'></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
