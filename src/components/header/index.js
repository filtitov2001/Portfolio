import React, {useState} from 'react';
import './header.css'
import Web from './web';
import Mobile from "./mobile";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header'>
      <div className='logo'> 
        <img alt={''} src={require('../../assets/image/folio.png')} className='logoPhoto'/>
        My portfolio
      </div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
           <div onClick={() => setIsOpen(!isOpen)}>
            {/* <i className="fi fi-nav-icon-a menu-icon"></i> */}
            {/*   <i className="fi fi-rr-Apps menu-icon"/>*/}
            <i className="lnr lnr-menu menu-icon"/>
           </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
