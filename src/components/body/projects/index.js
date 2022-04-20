import React, {useEffect, useState} from 'react';
import './projects.css';
import {collection, onSnapshot} from "@firebase/firestore";
import {db} from "../../../firebase-config";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";


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
            <span className="section__subtitle">Most recent works</span>
            <Swiper className={'portfolio__container container swiper-container'}
                    cssMode={true}
                    // loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
            >
                {projects.map((project) => {
                    return (
                        <SwiperSlide className={'portfolio__content grid'}>
                            <img src={project.image} alt="" className="portfolio__img"/>
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">{project.title}</h3>
                                <p className="portfolio__description">{project.description}</p>
                                {project.demo && (
                                    <a className="button button--flex button--small portfolio__button"
                                       href={project.demo}>
                                        Demo
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </a>
                                )}

                                {project.github && (
                                    <a className="button button--flex button--small portfolio__button"
                                       href={project.github}>
                                        Source code
                                        <i className="uil uil-github-alt button__icon"></i>
                                    </a>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Projects;