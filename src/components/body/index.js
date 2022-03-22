import React from 'react';
import About from './about';
//
import Contact from './contact';
// import Projects from './projects';
// import Work from './work';
import Home from "./home";
import Skills from "./skills";
import Qualification from "./work";
import Github from "./github/github-calendar";

function Body() {
  return (
      <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Github />

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
