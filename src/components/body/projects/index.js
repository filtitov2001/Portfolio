import React from 'react';
import {ProjectData} from '../../../data/projects';
import Separator from '../../common/separator';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {
    return (
    <div className='projects'>
        <Separator />
      <label className='section-title'>Projects</label>
      <div>
          {ProjectData.map((project) => {
              return <ProjectCard key={project.id.toString()} project={project}/>
          })}
      </div>
    </div>
  );
}

export default Projects;
