import React from 'react';
import {QualificationData} from '../../../data/qualification';
import QualificationCard from "./qualification-card/qualification-card";
import './qualification.css';
import {showQualification} from "./script";



function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification-container container">
                <div onMouseEnter={showQualification} className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active" data-target='#education'>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className="qualification__button button--flex" data-target='#work'>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>

                <div className="qualification__sections">
                    {QualificationData.map((item) => {
                        let firstQualification;
                        let qualificationId;
                        if (item.id === 0) {
                            firstQualification = 'qualification__content qualification__active'
                            qualificationId = item.name
                        } else {
                            firstQualification = 'qualification__content'
                            qualificationId = item.name
                        }

                        const lastIndex = item.qualifications.length - 1;
                        const lastElement = item.qualifications[lastIndex];
                        const lastElementId = lastElement.id;

                        return(

                            <div className={firstQualification} data-content id={qualificationId}>
                                {item.qualifications.map((qualification) => {
                                    return <QualificationCard
                                        key={qualification.id.toString()}
                                                              qualification={qualification}
                                                              lastElementId={lastElementId} />;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
  );
}

export default Qualification;