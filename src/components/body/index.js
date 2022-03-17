import React from 'react';
// import Skills from './skills';
// import About from './about';
//
// import Contcact from './contact';
// import Projects from './projects';
// import Work from './work';
import Home from "./home";
import './body.css';

function Body() {
  return (
    <div>
        <section className="home section" id="home">
            <Home />
        </section>
      {/*<section id='about'>*/}
      {/*  <About />*/}
      {/*</section>*/}
      {/*<section id='projects'>*/}
      {/*  <Projects />*/}
      {/*</section>*/}
      {/*<section id='skils'>*/}
      {/*  <Skills />*/}
      {/*</section>*/}
      {/*<section id='work'>*/}
      {/*  <Work />*/}
      {/*</section>*/}
      {/*<section id='contacts'>*/}
      {/*  <Contcact />*/}
      {/*</section>*/}
    </div>
  );
}

export default Body;
