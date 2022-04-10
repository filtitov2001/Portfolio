import React, {useEffect, useState} from 'react';
import {SkillsData} from '../../../data/skills';
import SkillCard from './skill-card/skill-card';
import './skills.css';
import {db} from "../../../firebase-config";
import {collection, getDocs} from "@firebase/firestore";

function showSkills() {
    const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })
}

function Skills() {
    const [skills, setSkills] = useState([]);
    const skillsCollectionRef = collection(db, "skills")
    useEffect(() => {
        const getSkills = async () => {
            const data = await getDocs(skillsCollectionRef);
            setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        };

        getSkills();
    }, [])

    return (
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {skills.map((item) => {
                    const firstSkill = parseInt(item.id) === 0 ? 'skills__open' : 'skills__close'

                    return(
                        <div onClick={showSkills} className={'skills__content ' + firstSkill}>
                            <div className="skills__header">
                                <i className="uil uil-brackets-curly skills__icon"></i>

                                <div>
                                    <h1 className="skills__title">{item.type}</h1>
                                    <span className="skills__subtitle">{item.experience}</span>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                {item.list.map((skill, index) => {
                                    console.log(skill.name)
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
