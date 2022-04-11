import React from 'react';
import {ServicesData} from "../../../data/services";
import ServicesCard from "./services_card/services_card";
import {showServices} from "./script";
import './services.css'

function Services() {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                {ServicesData.map((item) => {
                    return(
                        <div onMouseEnter={showServices} className="services__content">
                            <div>
                                {item.icon}
                                <h3 className="services__title">{item.profession}<br/>{item.status}</h3>
                            </div>

                            <span className="button button--flex button--small button--link services__button">
                                View More
                                <i className="uil uil-arrow-right button__icon"></i>
                            </span>
                            <div className="services__modal">
                                <div className="services__modal-content">
                                    <h4 className="services__modal-title">{item.profession}<br/>{item.status}</h4>
                                    <i className="uil uil-times services__modal-close"></i>

                                    <ul className="services__modal-services grid">
                                        {item.skills.map((skill) => {
                                            return(<ServicesCard skill={skill} />);
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;