import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Titov Felix</span>.<br /> I love design
          and coding.
        </div>
        <div className="about-photo">
          <img alt={''}
            src={require("../../../assets/image/coding.png")}
            className="picture"
          /> <br/>
          Test photo!
        </div>
      </div>
        <SocialContact />
    </div>
  );
}

export default About;
