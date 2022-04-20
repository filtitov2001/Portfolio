import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './notification.css'

const VanillaToasts = require('@filtitov2001/vanillatoasts');

function createNotification(title, message, type) {
    const icon = type === 'success'
        ? 'https://img.icons8.com/ios/500/159F4F/checked--v1.png'
        : 'https://img.icons8.com/ios/500/D20000/cancel.png'
    VanillaToasts.create({
        title: title,
        text: message,
        type: type,
        icon: icon,
        timeout: 5000,
        positionClass: 'topRight'
    })
}

export const ContactUs = () => {
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const form = useRef();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function isValidate() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if ((name === null || name === "") || (email === null || email === "") || (subject === null || subject === "") || (message === null || message === "")) {
            createNotification("Error!", "Fill in all fields!", 'error');
            return false;
        } else if (!validateEmail(email)) {
            createNotification("Error!", "Check your Email!", 'error');
            return false;
        } else {
            return true;
        }
    }

    function checkValidation() {
        if (isValidate()) {
            sendEmail()
        }
    }

    const sendEmail = () => {

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                // console.log(result.text);
                // window.alert(result.text)
                createNotification("Success!", "Your email has been sent!", 'success');
            }, (error) => {
                createNotification("Error!", "Something went wrong! Choose another way to contact.", 'error');
                // console.log(error.text);
                // window.alert(error.text)
            });
        document.getElementById("email-form").reset();
    };

    return (
        <form id="email-form" ref={form} onSubmit={sendEmail} action="" className="contact__form grid">
            <div className="contact__inputs grid">
                <div className="contact__content">
                    <label className="contact__label">Name <span style={{color: "red"}}>*</span></label>
                    <input type="text" className="contact__input" name="name" id="name"/>
                </div>

                <div className="contact__content">
                    <label className="contact__label">Your Email <span style={{color: "red"}}>*</span></label>
                    <input type="email" className="contact__input" name="email" id="email"/>
                </div>
            </div>
            <div className="contact__content">
                <label className="contact__label">Subject <span style={{color: "red"}}>*</span></label>
                <input type="text" className="contact__input" name="subject" id="subject"/>
            </div>
            <div className="contact__content">
                <label className="contact__label">Message <span style={{color: "red"}}>*</span></label>
                <br/>
                <textarea className="contact__input" cols="0" rows="7" name="message" id="message"/>
            </div>

            <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a style={{cursor: "pointer"}} onClick={checkValidation} className="button button--flex">
                    Send Message
                    <i className="uil uil-message button__icon"></i>
                </a>

            </div>
        </form>
    );
};
