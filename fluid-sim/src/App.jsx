import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home.jsx';
import Simulation from './pages/Simulation.jsx';

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;