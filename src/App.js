import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Instagram from './pages/Instagram';
import Kontakt from './pages/Kontakt';

import Tikar from './pages/tikar/Tikar';
import Alice from './pages/tikar/Alice';
import Isadora from './pages/tikar/Isadora';

import Valpar from './pages/valpar/Valpar';
import Akullen from './pages/valpar/A-Kullen';
import Bkullen from './pages/valpar/B-kullen';

import Sidebar from './components/Sidebar';
import './components/Navbar.css';
function App() {
  return (
    <>
      <div className="main">
        <Router>
          <Sidebar />

          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/tikar" element={<Tikar />} />
            <Route path="/ladyAlice" element={<Alice />} />
            <Route path="/ladyIsadora" element={<Isadora />} />

            <Route path="/valpar" element={<Valpar />} />
            <Route path="/Akullen" element={<Akullen />} />
            <Route path="/Bkullen" element={<Bkullen />} />

            <Route path="/instagram" element={<Instagram />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
