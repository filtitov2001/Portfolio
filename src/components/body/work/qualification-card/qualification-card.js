import React from 'react';
import './qualification-card.css';


function isLast(qualificationId, lastElement) {
    return qualificationId === lastElement
}

function isEven(id){
    return id % 2 === 0
}

function getMainInfo(qualification) {
    return(
        <div>
            <h3 className="qualification__title">{qualification.skill_title}</h3>
            <span className="qualification__subtitle">{qualification.skill_subtitle}</span>
            <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {qualification.startDate} - {qualification.endDate}
            </div>
        </div>
    );
}

function getRoadBlock(index, lastElementId) {
    if (isLast(index, lastElementId)) {
        return (
            <div>
                <span className="qualification__rounder"></span>
            </div>
        );
    } else {
        return (
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
        );
    }
}

function getBlockById(qualification, lastElementId, index) {

    if (isEven(index)) {
        return(
            <div className="qualification__data">
                {getMainInfo(qualification)}
                {getRoadBlock(index, lastElementId)}
            </div>
        );
    } else {
        return(
            <div className="qualification__data">
                <div></div>
                {getRoadBlock(index, lastElementId)}
                {getMainInfo(qualification)}
            </div>
        );
    }
}

function QualificationCard(props) {
      return (getBlockById(props.qualification, props.lastElementId, props.index));
}

export default QualificationCard;