import React, { useState } from 'react';
import {
  Navbar,
  Footer,
} from './components';

function App() {

  return (
    <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;