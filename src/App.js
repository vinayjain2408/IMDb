import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Components/toggle/AllSerial/Detail';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:index" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




// import React from 'react'
// import {BrowserRouter , Routes, Route} from "react-router-dom"
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Detail from './Components/toggle/AllSerial/Detail'
// import Home from './Home'
// function App() {

//   return (
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/Singlepath/:index' element={<Detail/>}></Route>
//       </Routes>
//       <Footer />
//       </BrowserRouter> 
//   )
// }

// export default App
