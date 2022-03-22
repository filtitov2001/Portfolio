import React from 'react';
import './qualification-card.css';


function isLast(qualificationId, lastElement) {
    return qualificationId === lastElement
}

function isEven(id){
    return id % 2 === 0
}

function getRoadBlock(qualification, lastElementId) {
    if (isLast(qualification.id, lastElementId)) {
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

function getBlockById(qualification, lastElementId) {

    if (isEven(qualification.id)) {
        return(
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">{qualification.skill_title}</h3>
                    <span className="qualification__subtitle">{qualification.skill_subtitle}</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                         {qualification.startDate} - {qualification.endDate}
                    </div>
                </div>
                {getRoadBlock(qualification, lastElementId)}
            </div>
        );
    } else {
        return(
            <div className="qualification__data">
                <div></div>
                {getRoadBlock(qualification, lastElementId)}
                <div>
                    <h3 className="qualification__title">{qualification.skill_title}</h3>
                    <span className="qualification__subtitle">{qualification.skill_subtitle}</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        {qualification.startDate} - {qualification.endDate}
                    </div>
                </div>
            </div>
        );
    }
}

function QualificationCard(props) {
      return (getBlockById(props.qualification, props.lastElementId));
}

export default QualificationCard;