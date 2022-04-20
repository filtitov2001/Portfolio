import React, {useEffect, useState} from 'react';
import './contact.css';
import {ContactUs} from "./notifications/notification";
import {collection, onSnapshot} from "@firebase/firestore";
import {db} from "../../../firebase-config";


function Contact() {
    const [contacts, setContacts] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "contacts"), (snapshot) =>
                setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ), []
    );
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    {contacts.map((contact) => {
                        return(
                            <div className="contact__information">
                                <i className={"uil " + contact.icon + " contact__icon"}></i>
                                <a href={contact.link} target="_blank" rel="noreferrer">
                                    <div>
                                        <h3 className="contact__title">{contact.title}</h3>
                                        <span
                                            className="contact__subtitle">{contact.subtitle}</span>
                                    </div>
                                </a>
                            </div>
                        );
                    })}

                </div>
                <ContactUs/>
            </div>
        </section>
    );
}

export default Contact;
