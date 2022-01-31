import React from 'react';
import './project-card.css';

function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label id={project.id.toString()} className='project-title'>{project.title}</label>
            <div className='project-links'>
                {project.demo && (
                    <a id={project.id.toString()} className='project-link' href={project.demo}>
                        <div className='link-button'>
                            <i className="fi fi-world-o"/>Demo
                        </div>
                    </a>
                )}
                {project.github && (
                    <a id={project.id.toString()} className='project-link' href={project.github}>
                        <div className='link-button'>
                            <i className="devicon-github-original colored"/>GitHub
                        </div>
                    </a>
                )}

            </div>
            <p id={project.id.toString()}>{project.about}</p>
            <div className='project-tags'>
                {project.tags.map((tag,index) => {
                    return (
                        <label key={index.toString()} className='tag'>{tag}</label>
                    )
                })}
            </div>
        </div>
        <img id={project.id.toString()} alt={''} src={project.image} className='project-photo'/>
    </div>
  );
}

export default ProjectCard;
