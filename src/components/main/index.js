import React from 'react';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import './main.css'
import ScrollUp from "../scroll-up";


function Main() {

  return (
      <div>
          <Header />
          <Body />
          <Footer />
          <ScrollUp />
      </div>
  );
}

export default Main;
