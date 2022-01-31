import React from 'react';
import './web.css';

function Web() {
  return (
    <div className='web'>
        <div className='web-option'>
            <a href='#projects'>
                <span className="lnr lnr-code option-icon"/> Projects
            </a>
        </div>
        <div className='web-option'>
            <a href='#skils'>
                <span className="lnr lnr-laptop-phone option-icon"/> Skils
            </a>
        </div>
        <div className='web-option'>
            <a href='#work'>
                <span className="lnr lnr-briefcase option-icon"/> Work
            </a>
        </div>
        <div className='web-option'>
            <a href='#contacts'>
                <span className="lnr lnr-user option-icon"/> Contacts
            </a>
        </div>
    </div>
  );
}

export default Web;
