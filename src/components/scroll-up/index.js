import React from 'react';
import './scroll.css'
import {scroll_up} from "./script";


function ScrollUp() {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollUp;