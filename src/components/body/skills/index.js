import React, {useEffect, useState} from 'react';
import SkillCard from './skill-card/skill-card';
import './skills.css';
import {db} from "../../../firebase-config";
import {collection, getDocs, onSnapshot} from "@firebase/firestore";
import {showSkills} from "./script";


function Skills() {
    const [skills, setSkills] = useState([]);
    // const skillsCollectionRef = collection(db, "skills")
    // useEffect(() => {
    //     // const getSkills = async () => {
    //     //     const data = await getDocs(skillsCollectionRef);
    //     //     setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    //     // };
    //     //
    //     // getSkills();
    //     onSnapshot(collection(db, "skills"), (snapshot) =>
    //         setSkills(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}))))
    // }, [])

    useEffect(
        () =>
            onSnapshot(collection(db, "skills"), (snapshot) =>
                setSkills(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    return (
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {skills.map((item) => {
                    const firstSkill = parseInt(item.id) === 1 ? 'skills__open' : 'skills__close';

                    return(
                        <div className={'skills__content ' + firstSkill}>

                            <div onMouseEnter={showSkills} className="skills__header">
                                <i className={"uil " + item.icon + " skills__icon"}></i>
                                <div>
                                    <h1 className="skills__title">{item.type}</h1>
                                    <span className="skills__subtitle">{item.experience}</span>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>


                            <div className="skills__list grid">
                                {item.list.map((skill) => {
                                    return <SkillCard skill={skill} />;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
  );
}

export default Skills;
