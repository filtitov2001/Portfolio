import React, {useEffect, useState} from 'react';
import ServicesCard from "./services_card/services_card";
import {showServices} from "./script";
import './services.css'
import {collection, onSnapshot} from "@firebase/firestore";
import {db} from "../../../firebase-config";

function Services() {
    const [services, setServices] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(db, "services"), (snapshot) =>
                setServices(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {services.map((item) => {
                    return(
                        <div onMouseEnter={showServices} className="services__content">
                            <div>
                                <i className={"uil " + item.icon + " services__icon"}></i>
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