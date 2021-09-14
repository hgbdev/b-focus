import React, { FC, useEffect } from 'react';

import YouTube from 'react-youtube';
import Footer from './Footer';

import Header from './Header';
import Pomodoro from './Pomodoro';
import RadioYoutube from './RadioYoutube';

type Props = {};

const Index: FC<Props> = (props) => {
  return (
    <>
      <div className="background">
        <div className="crt-lines"></div>
      </div>

      <div className="container">
        {/* --------------------------------- Header --------------------------------- */}
        <section id="header" className="component">
          <Header />
        </section>

        {/* -------------------------------- Pomodoro -------------------------------- */}
        <section id="pomodoro" className="component">
          <Pomodoro />
        </section>

        {/* ------------------------------ Radio Youtube ----------------------------- */}
        <section id="radio-youtube" className="component">
          <RadioYoutube />
        </section>

        {/* --------------------------------- Header --------------------------------- */}
        <section id="footer" className="component">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Index;
