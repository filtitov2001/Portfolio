import React, {useEffect, useState} from 'react';
import {ProjectData} from '../../../data/projects';
import './projects.css';
import {collection, onSnapshot} from "@firebase/firestore";
import {db} from "../../../firebase-config";

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(
        () =>
            onSnapshot(collection(db, "projects"), (snapshot) =>
                setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    return(
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent work</span>

            <div className="portfolio__container container swiper-container">
                <div className="swiper-wrapper">
                    {projects.map((project) => {
                        return(
                            <div className="portfolio__content grid swiper-slide">
                                <img src={project.image} alt="" className="portfolio__img" />

                                <div className="portfolio__data">
                                    <h3 className="portfolio__title">{project.title}</h3>
                                    <p className="portfolio__description">{project.description}</p>
                                        {project.demo && (
                                            <a className="button button--flex button--small portfolio__button" href={project.demo}>
                                                Demo
                                                <i className="uil uil-arrow-right button__icon"></i>
                                            </a>
                                        )}

                                        {project.github && (
                                            <a className="button button--flex button--small portfolio__button" href={project.github}>
                                                Source code
                                                <i className="uil uil-github-alt button__icon"></i>
                                            </a>
                                        )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Projects;
