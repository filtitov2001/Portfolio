import React from 'react';
// import Skills from './skills';
import About from './about';
//
import Contact from './contact';
// import Projects from './projects';
// import Work from './work';
import Home from "./home";

function Body() {
  return (
      <main className="main">
          <Home />
          <About />

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
        <Contact />
      {/*</section>*/}
    </main>
  );
}

export default Body;
