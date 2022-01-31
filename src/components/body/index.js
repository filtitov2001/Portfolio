import React from 'react';
import Skills from './skills';
import About from './about';
import './body.css';
import Contcact from './contact';
import Projects from './projects';
import Work from './work';

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='skils'>
        <Skills />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='contacts'>
        <Contcact />
      </section>
    </div>
  );
}

export default Body;
