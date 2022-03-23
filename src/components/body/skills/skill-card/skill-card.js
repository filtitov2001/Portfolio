import React from 'react';
import './skill-card.css';

function SkillCard({ skill }) {
  return (
      <div className="skills__data">
          <div className="skills__titles">
              <h3 className="skills__name">{skill.name}</h3>
              <span className="skills__number">{skill.knowledge}</span>
          </div>
          <div className="skills__bar">
              <span className="skills__percentage" style={{"width": skill.knowledge}}></span>
          </div>
      </div>
  );
}

export default SkillCard;

