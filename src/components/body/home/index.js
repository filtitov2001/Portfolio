import React, {useEffect, useState} from 'react';
import './home.css'
import SVG from "./SVG";
import {collection, onSnapshot} from "@firebase/firestore";
import { onValue, ref } from "firebase/database";
import {db, rdb} from "../../../firebase-config";

function Home() {
    const [links, setLinks] = useState([]);
    const [coordinates, setCoordinates] = useState([]);

    const [mainInfo, setMainInfo] = useState([]);

    useEffect(() =>
            onSnapshot(collection(db, "main-links"), (snapshot) =>
                setLinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ), []
    );

    useEffect(() => {
        onValue(ref(rdb, "maininfo/coordinates"), (snapshot) => {
            setCoordinates([]);
            const data = snapshot.val();
            if (data !== null) {
                setCoordinates(data)
            }
        });

        onValue(ref(rdb, "maininfo"), (snapshot) => {
            setMainInfo([]);
            const data = snapshot.val();
            if (data !== null) {
                setMainInfo(data)
            }
        });
    }, []);

    console.log(mainInfo);

  return (
      <section className="home section" id="home">
          <div className="home__container container grid">
              <div className="home__content grid">
                  <div className="home__social">
                      {links.map((item) => {
                          return(
                              <a href={item.link} target="_blank" rel="noreferrer" className="home__social-icon">
                                  <i className={item.icon}></i>
                              </a>
                          );
                      })}
                  </div>
                  <div className="home__img">
                      <SVG photo={mainInfo.photo} coordinates={coordinates} />
                  </div>

                  <div className="home__data">
                      <h1 className="home__title">Hi, I'm {mainInfo.name}! <span className="wave" role="img" aria-labelledby="wave">👋🏼</span></h1>
                      <h3 className="home__subtitle">{mainInfo.title}</h3>
                      <p className="home__description">{mainInfo.subtitle}</p>
                      <a href="#contact" className="button button--flex">
                          Contact me <i className="uil uil-message button__icon"></i>
                      </a>
                  </div>
              </div>
              <div className="home__scroll">
                  <a href="#about" className="home__scroll-button button--flex">
                      <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                      <span className="home__scroll-name">Scroll down</span>
                      <i className="uil uil-arrow-down home__scroll-arrow"></i>
                  </a>
              </div>
          </div>
      </section>
  );
}

export default Home;
