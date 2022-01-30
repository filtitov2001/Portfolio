import React from 'react';
import {SkillsData} from '../../../data/skills';
import Separator from '../../common/separator';
import Github from './github-calendar';
import SkillCard from './skill-card';
import './skills.css';

function Skills() {
    return (
    <div className='skills'>
      <Separator />
      <label className='section-title'>Skills</label>
      <div className='skills-container'>
        {SkillsData.map((item) => {
          return (
            <div key={item.id} className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, index) => {
                  return <SkillCard key={index} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
        <div className='skills-container'> 
          <div className="skills-section">
            <label className="skills-section-title">Days I <strong style={{color:"#6367f6"}}>Code</strong></label>
          </div> 
        </div>
        <Github />
      </div>
    </div>
  );
}

export default Skills;
