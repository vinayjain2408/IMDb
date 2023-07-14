import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"
// import Header from './Components/Header'
// import Banner from './Components/Banner'
// import Wishlist from './Components/Wishlist'
// import Axios from "./Components/toggle/Axios"
// import Week from './Components/this week/Week'
import Footer from './Components/Footer'
// import requests from './server/Server'

// import Serial from './Components/toggle/AllSerial/Serial'
import Detail from './Components/toggle/AllSerial/Detail'
import Home from './Home'
// import Favorites from "./Components/favourite/Favorites"


function App() {

  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/' element={<Banner/>}></Route>
        <Route path='/' element={<Axios/>}></Route>
        <Route path='/' element={<Wishlist/>}></Route> */}
        {/* <Route path='/' element={<Serial/>}></Route> */}
        <Route path='/Singlepath/:id' element={<Detail/>}></Route>
        <Route path='/' element={<Footer/>}></Route>

      </Routes>
      </BrowserRouter>


      {/* <Week
        Name="Fan favorites"
        Data={requests.TopRated} />
      <Week
        Name="In theaters"
        Data={requests.Intheaters} />
      <Week
        Name="Coming soon to theaters"
        Data={requests.UpcomingMovies} /> */}

      {/* <Footer /> */}
    </div>
  )
}

export default App