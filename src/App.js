import React, { useState } from 'react';
import {
  Navbar,
  Footer,
  AboutMe,
  Portfolio,
  MainSection
} from './components';

function App() {

  // switch (tab) {
  //   case 'About Me':
  //     return <AboutMe />;
  //   case 'Portfolio':
  //     return <Portfolio />;
    // case 'Contact':
    //   return < />;
    // case 'Resume':
    //   return < />;
  // }

  return (
    <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}
    >
      <Navbar/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
