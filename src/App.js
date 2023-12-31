import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Components/toggle/AllSerial/Detail';
import Home from './Home';
import Search from './Components/search/Search';
import Moviedetail from './Components/toggle/AllSerial/Moviedetail';
import Login from './signup/Login';
function App() {



  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/detail/:checkType/:id" element={<Detail />} />
        <Route path="/movie/Detail/:id" element={<Moviedetail />} />
        <Route path="/search/:inputValue" element={<Search />} />
      
      </Routes>
      <Footer />
    </Router>
 
  );
}

export default App;





// import React ,{createContext, useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Detail from './Components/toggle/AllSerial/Detail';
// import Home from './Home';
// import requests from './server/Server';
// // import { Details } from '@mui/icons-material';
// export const MyContext = createContext(null);


// function App() {



//   const [SerialLink, setSerialLink] = useState(requests.popularMovie);


//   function handleSerial(type) {
//     if (type === 'movie') {
//       setSerialLink(requests.popularMovie);
//     } else if (type === 'tv') {
//       setSerialLink(requests.popularTV);
//     }
//   }
  

//   // const [checked, setChecked] = useState(false);

//   // const handleChange = () => {
//   //   setChecked(!checked);
//   //   if (SerialLink === requests.popularMovie) {
//   //     setSerialLink(requests.popularTV);
//   //   } else {
//   //     setSerialLink(requests.popularMovie);
//   //   }
//   // };

//   // function handleMovie(){
//   //     setSerialLink(requests.popularMovie)
//   // }
//   // function handleTV(){
//   //     setSerialLink(requests.popularTV)
//   // }


 

//   return (
//     <MyContext.Provider value={{SerialLink,handleSerial}}>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/detail/:index" element={<Detail />} />
//         {/* <Route path="/detail/:index/:SerialLink" element={<Details />} /> */}

//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//     </MyContext.Provider>
//   );
// }

// export default App;
