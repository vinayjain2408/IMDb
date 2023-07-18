import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Components/toggle/AllSerial/Detail';
import Home from './Home';
import { Details } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:index" element={<Detail />} />
        {/* <Route path="/detail/:index/:SerialLink" element={<Details />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;







