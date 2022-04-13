import React from 'react';
import './contact.css';
import {ContactUs} from "./notifications/notification";


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
                                <a href="tel: 89265967989"><span
                                    className="contact__subtitle">+7 926 596 79 89</span></a>
                            </div>
                        </a>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <a href="mailto: fil.titov61@gmail.com">
                            <div>
                                <h3 className="contact__title">Email</h3>
                                <a href="mailto: fil.titov61@gmail.com"><span
                                    className="contact__subtitle">fil.titov61@gmail.com</span></a>
                            </div>
                        </a>
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
                <ContactUs/>
            </div>
        </section>
    );
}

export default Contact;
