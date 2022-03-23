import React from 'react';
import './services_card.css'

function ServicesCard(props) {
    return (
        <li className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p>{props.skill.description}</p>
        </li>
    );
}

export default ServicesCard;