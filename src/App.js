import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import About  from "./pages/About";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Dashboard  from "./pages/Dashboard";
import Canal26  from "./pages/Canal26";
import Telemax from './pages/Telemax';
import Musictop from './pages/Musictop';
import Tlcpreview from './pages/Tlcpreview';
import Latinatv from './pages/Latinatv';
import Tierramiatv from './pages/Tierramiatv';
import Wowza from './pages/wowza';

function App() {
  return (
    <div>

      <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="Canal26" element={<Canal26 />} />
                <Route path="Telemax" element={<Telemax />} />
                <Route path="Musictop" element={<Musictop />} />
                <Route path="Tierramiatv" element={<Tierramiatv />} />
                <Route path="Tlcpreview" element={<Tlcpreview />} />
                <Route path="Latinatv" element={<Latinatv />} />
                <Route path="Wowza" element={<Wowza />} />

                <Route path="dashboard" element={<Dashboard />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Home />} />
            </Route>
      </Routes>

    </div>
  );
}

export default App;
