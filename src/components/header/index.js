import React from 'react';
import './header.css'
import {changeTheme} from "./scriptTheme";
import {showMenu} from "./scriptMenu";


function Header() {
  return (
      <header className="header" id="header">
          <nav className="nav container">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav__logo" href="#">
                  Felix's portfolio
              </a>
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
                  <i onMouseEnter={changeTheme} className="uil uil-moon change-theme" id="theme-button"></i>

                  <div className="nav__toggle" id="nav-toggle">
                      <i onMouseEnter={showMenu} className="uil uil-apps"></i>
                  </div>
              </div>
          </nav>
      </header>
  );
}

export default Header;
