import React from 'react';
import './footer.css';

function Footer() {
  return (
      <footer className="footer">
          <div className="footer__bg">
              <div className="footer__container container grid">
                  <div>
                      <h1 className="footer__title">Felix</h1>
                      <span className="footer__subtitle">iOS developer</span>
                  </div>

                  <ul className="footer__links">
                      <li>
                          <a href="#services" className="footer__link">Services</a>
                      </li>
                      <li>
                          <a href="#portfolio" className="footer__link">Portfolio</a>
                      </li>
                      <li>
                          <a href="#contact" className="footer__link">Contact me</a>
                      </li>
                  </ul>
                  <div className="footer__socials">
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social">
                          <i className="uil uil-facebook-f"></i>
                      </a>

                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social">
                          <i className="uil uil-instagram"></i>
                      </a>

                      <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social">
                          <i className="uil uil-twitter-alt"></i>
                      </a>
                  </div>
              </div>
              <p className="footer__copy">&#169; Felix Titov 2022. All rights reserved.</p>
          </div>
      </footer>
  );
}

export default Footer;
