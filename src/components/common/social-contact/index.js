import React from 'react';
import { SocialData } from '../../../data/social';
import './social-contact.css'

function SocialContact() {
    const data = SocialData;
  return (
    <div className='social-contact'>
      {data.map((item)=>{
          return(
              <a key={item.id.toString()} href={item.link}>
                  <div key={item.id} className='social-icon-div'>
                    <img alt={''} key={item.id} src={item.icon} className='social-icon'/>
                  </div>
              </a>
          )
      })}
    </div>
  );
}

export default SocialContact;
