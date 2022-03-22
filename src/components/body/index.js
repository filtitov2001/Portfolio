import React from 'react';
import About from './about';
import Contact from './contact';
// import Projects from './projects';
import Home from "./home";
import Skills from "./skills";
import Qualification from "./work";
import Github from "./github/github-calendar";
import Services from "./services";

function Body() {
  return (
      <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Github />
          <Services />

          <Contact />
    </main>
  );
}

export default Body;
