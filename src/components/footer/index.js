import React, {useEffect, useState} from 'react';
import './footer.css';
import {collection, onSnapshot} from "@firebase/firestore";
import {db, rdb} from "../../firebase-config";
import {onValue, ref} from "firebase/database";

function Footer() {
    const [links, setLinks] = useState([]);
    const [footerInfo, setFooterInfo] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "footer-links"), (snapshot) =>
                setLinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );

    useEffect(() => {
        onValue(ref(rdb, "maininfo"), (snapshot) => {
            setFooterInfo([]);
            const data = snapshot.val();
            if (data !== null) {
                setFooterInfo(data)
            }
        });

    }, []);
  return (
      <footer className="footer">
          <div className="footer__bg">
              <div className="footer__container container grid">
                  <div>
                      <h1 className="footer__title">{footerInfo.name}</h1>
                      <span className="footer__subtitle">{footerInfo.title}</span>
                  </div>

                  <ul className="footer__links">
                      <li>
                          <a href="#services" className="footer__link">Services</a>
                      </li>
                      <li>
                          <a href="#portfolio" className="footer__link">Portfolio</a>
                      </li>
                      <li>
                          <a href="#contact" className="footer__link">Contact me</a>
                      </li>
                  </ul>
                  <div className="footer__socials">
                      {links.map((item) => {
                          return(
                              <a href={item.link} target="_blank" rel="noreferrer" className="footer__social">
                                  <i className={item.icon}></i>
                              </a>
                          );
                      })}
                  </div>
              </div>
              <p className="footer__copy">Developed by Felix Titov &#169; 2022. All rights reserved.</p>
          </div>
      </footer>
  );
}

export default Footer;
