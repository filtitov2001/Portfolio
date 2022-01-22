import React from 'react';
import './mobile.css';

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
        <span className="lnr lnr-cross-circle"></span>
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
                <a href='#projects'>
                    <span className="lnr lnr-code option-icon"></span> Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skils'>
                    <span className="lnr lnr-laptop-phone option-icon"></span> Skils
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#work'>
                    <span className="lnr lnr-briefcase option-icon"></span> Work
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contacts'>
                    <span className="lnr lnr-user option-icon"></span> Contacts
                </a>
            </div>
      </div>
    </div>
  );
}

export default Mobile;
