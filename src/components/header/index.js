import React from 'react';
import './header.css'
// import Web from './web';
// import Mobile from "./mobile";
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function Header() {
  return (
      <header className="header" id="header">
          <nav className="nav container">
              <a className="nav__logo" href="#">Felix's portfolio</a>
              <div className="nav__menu" id="nav-menu">
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className="nav__link active-link">
                              <i className="uil uil-estate nav__icon"></i> Home
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#about" className="nav__link">
                              <i className="uil uil-user nav__icon"></i> About
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#skills" className="nav__link">
                              <i className="uil uil-file-alt nav__icon"></i> Skills
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#services" className="nav__link">
                              <i className="uil uil-briefcase-alt nav__icon"></i> Services
                          </a>

                      </li>
                      <li className="nav__item">
                          <a href="#portfolio" className="nav__link">
                              <i className="uil uil-scenery nav__icon"></i> Portfolio
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#contact" className="nav__link">
                              <i className="uil uil-message nav__icon"></i> Contact me
                          </a>
                      </li>
                  </ul>
                  <i className="uil uil-times nav__close" id="nav-close"></i>
              </div>

              <div className="nav__btns">
                  <i className="uil uil-moon change-theme" id="theme-button"></i>

                  <div className="nav__toggle" id="nav-toggle">
                      <i className="uil uil-apps"></i>
                  </div>
              </div>
          </nav>
      </header>
  );
}

export default Header;
