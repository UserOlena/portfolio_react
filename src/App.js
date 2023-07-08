import React from 'react';
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
      backgroundColor: '#e8e8e8',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }}
    >
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;