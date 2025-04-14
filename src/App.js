
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path='/contact' element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
