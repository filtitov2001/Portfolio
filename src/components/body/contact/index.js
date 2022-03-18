import React from 'react';
import './contact.css';

function Contact() {
  return (
      <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid">
              <div>
                 <div className="contact__information">
                     <i className="uil uil-phone contact__icon"></i>
                     <a href="tel: 89265967989">
                         <div>
                              <h3 className="contact__title">Call Me</h3>
                              <a href="tel: 89265967989"><span className="contact__subtitle">+7 926 596 79 89</span></a>
                         </div>
                     </a>
                  </div>

                  <div className="contact__information">
                      <i className="uil uil-envelope contact__icon"></i>
                      <div>
                          <h3 className="contact__title">Email</h3>
                          <a href="mailto: fil.titov61@gmail.com"><span className="contact__subtitle">fil.titov61@gmail.com</span></a>
                      </div>
                  </div>
                  <div className="contact__information">
                      <i className="uil uil-map-marker contact__icon"></i>
                      <a
                          href="https://www.google.com/maps/place/Moscow/@55.7703772,37.5438898,11.15z/data=!4m5!3m4!1s
                          0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.7558342!4d37.6173162?hl" target="_blank"
                          rel="noreferrer">
                          <div>
                              <h3 className="contact__title">Location</h3>
                              <span className="contact__subtitle">Moscow, Russia</span>
                          </div>
                      </a>
                  </div>
              </div>
              <form action="" className="contact__form grid">
                  <div className="contact__inputs grid">
                      <div className="contact__content">
                          <label className="contact__label">Name</label>
                          <input type="text" className="contact__input" />
                      </div>

                      <div className="contact__content">
                          <label className="contact__label">Email</label>
                          <input type="email" className="contact__input"/>
                      </div>
                  </div>
                  <div className="contact__content">
                      <label className="contact__label">Subject</label>
                      <input type="text" className="contact__input"/>
                  </div>
                  <div className="contact__content">
                      <label className="contact__label">Message</label>
                      <br/>
                      <textarea className="contact__input" cols="0" rows="7"></textarea>
                  </div>

                  <div>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="button button--flex">
                          Send Message
                          <i className="uil uil-message button__icon"></i>
                      </a>
                  </div>
              </form>
          </div>
      </section>
  );
}

export default Contact;
