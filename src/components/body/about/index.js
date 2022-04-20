import React, {useEffect, useState} from 'react';
import './about.css';
import {onValue, ref} from "firebase/database";
import {rdb} from "../../../firebase-config";

function About() {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    onValue(ref(rdb, "aboutinfo"), (snapshot) => {
      setAboutInfo([]);
      const data = snapshot.val();
      if (data !== null) {
        setAboutInfo(data)
      }
    });
  }, []);

  return (
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>
          <div className="about__container container grid">
            <img src={aboutInfo.photo}
                 alt="" className="about__img"/>
            <div className="about__data">
              <p className="about__description">{aboutInfo.description}</p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">{aboutInfo.experience}</span>
                  <span className="about__info-name">Years`<br/> experience</span>
                </div>
                <div>
                  <span className="about__info-title">{aboutInfo.projects}</span>
                  <span className="about__info-name">Completed <br/> project</span>
                </div>
                <div>
                  <span className="about__info-title">{aboutInfo.companies}</span>
                  <span className="about__info-name">Companies <br/> worked</span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" target="_blank" rel="noreferrer" href={aboutInfo.CV}
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
