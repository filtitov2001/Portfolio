import React from 'react';
import './about.css';

function About() {
  return (
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>
          <div className="about__container container grid">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-71b8e.appspot.com/o/about.jpg?alt=media&token=10df8769-2af1-42f5-ab5e-969bba43ab13"
                 alt="" className="about__img"/>
            <div className="about__data">
              <p className="about__description">
                Web developer, with extensive knowledge and years of experience, working in web technologies
                and Ui / Ux design, delivering quality work.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">08+</span>
                  <span className="about__info-name">Years`<br/> experience</span>
                </div>
                <div>
                  <span className="about__info-title">20+</span>
                  <span className="about__info-name">Completed <br/> project</span>
                </div>
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">Companies <br/> worked</span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href="https://firebasestorage.googleapis.com/v0/b/portfolio-71b8e.appspot.com/o/test.pdf?alt=media&token=2eb92843-8f53-44b6-b05d-19a27fb8ef9c"
                   className="button button--flex">
                  Download CV<i className="uil uil-download-alt button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

  );
}

export default About;
