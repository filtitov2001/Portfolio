import React from 'react';
import './home.css'
import SVG from "./SVG";

function Home() {
  return (
      <section className="home section" id="home">
          <div className="home__container container grid">
              <div className="home__content grid">
                  <div className="home__social">
                      <a href="https://facebook.com" className="home__social-icon">
                          <i className="uil uil-linkedin-alt"></i>
                      </a>

                      <a href="https://facebook.com" className="home__social-icon">
                          <i className="uil uil-gitlab"></i>
                      </a>

                      <a href="https://facebook.com" className="home__social-icon">
                          <i className="uil uil-github-alt"></i>
                      </a>
                  </div>
                  <div className="home__img">
                      <SVG />
                  </div>

                  <div className="home__data">
                      <h1 className="home__title">Hi, I'm Felix! <span className="wave" role="img" aria-labelledby="wave">👋🏼</span></h1>
                      <h3 className="home__subtitle">iOS Developer</h3>
                      <p className="home__description">High level experience in web design and development knowledge,
                          producing quality work.</p>
                      <a href="#contact" className="button button--flex">
                          Contact me <i className="uil uil-message button__icon"></i>
                      </a>
                  </div>
              </div>
              <div className="home__scroll">
                  <a href="#about" className="home__scroll-button button--flex">
                      <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                      <span className="home__scroll-name">Scroll down</span>
                      <i className="uil uil-arrow-down home__scroll-arrow"></i>
                  </a>
              </div>
          </div>
      </section>
  );
}

export default Home;
