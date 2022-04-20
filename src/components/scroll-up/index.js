import React from 'react';
import './scroll.css'
import {scrollUp, scrollHeader, scrollActive} from "./script";


function ScrollUp() {

    window.addEventListener('scroll', scrollActive)


    window.addEventListener('scroll', scrollHeader)


    window.addEventListener('scroll', scrollUp)

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollUp;