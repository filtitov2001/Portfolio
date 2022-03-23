import React from 'react';
import {SkillsData} from '../../../data/skills';
import SkillCard from './skill-card/skill-card';
import './skills.css';

function Skills() {
    return (
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {SkillsData.map((item) => {
                    const firstSkill = item.id === 1 ? 'skills__open' : 'skills__close'
                    return(
                        <div className={'skills__content ' + firstSkill}>
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
