import React from 'react';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import './contact.css';

function Contcact() {
  return (
    <div className='contact'>
        <Separator />
        <label className='section-title'>Conctact</label>
        <div className='contact-container'>
            <div className='contact-left'>
                <p>Want to get in touch? Contact me on any of the platform</p>
                <SocialContact />
            </div>
            <div className='left'>
                <div className="about-photo">
                        <img
                            src={require("../../../assets/image/coding.png")}
                            className="picture"
                        />
                </div>
                <div className='download'>
                    
                    <a download href={require('../../../assets/test.pdf')}>
                    <span class="lnr lnr-cloud-download download-icon"></span>Download Resume 
                    </a>
                </div>
                </div>
        </div>
    </div>
  );
}

export default Contcact;
