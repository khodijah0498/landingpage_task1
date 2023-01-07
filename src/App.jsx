import React from 'react';
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Atoms from './pages/Atoms/Atoms';
import Men from './pages/Men/Men';
import Women from './pages/Women/women';
import Accessories from './pages/Accessories/Accesories';
import About from './pages/About/About';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Atoms />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/about" element={<About/>} /> 
      </Routes>
      <Footer />
</div>
  )
}

export default App;