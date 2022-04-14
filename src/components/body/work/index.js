import React, {useEffect, useState} from 'react';
import QualificationCard from "./qualification-card/qualification-card";
import './qualification.css';
import {showQualification} from "./script";
import {collection, onSnapshot} from "@firebase/firestore";
import {db} from "../../../firebase-config";

function Qualification() {
    const [qualifications, setQualifications] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(db, "qualifications"), (snapshot) =>
                setQualifications(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

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
                    {qualifications.map((item) => {
                        let firstQualification;
                        let qualificationId;
                        if (parseInt(item.id) === 0) {
                            firstQualification = 'qualification__content qualification__active'
                            qualificationId = item.name
                        } else {
                            firstQualification = 'qualification__content'
                            qualificationId = item.name
                        }

                        const lastIndex = item.experience.length - 1;

                        return(

                            <div className={firstQualification} data-content id={qualificationId}>
                                {item.experience.map((qualification, index = item.experience.indexOf(qualification)) => {
                                    return <QualificationCard
                                        index={index}
                                        qualification={qualification}
                                        lastElementId={lastIndex} />;
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