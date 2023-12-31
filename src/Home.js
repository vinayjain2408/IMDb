import React from 'react'

import Banner from './Components/Banner'
import Wishlist from './Components/Wishlist'
import Axios from "./Components/toggle/Axios"
import Week from './Components/this week/Week'
import requests from './server/Server'
import Serial from './Components/toggle/AllSerial/Serial'

function Home() {
  return (
    <div>  
       <Banner />
         <Axios /> 
        <Wishlist />
        <Week
        Name="Fan favorites"
        Data={requests.TopRated} />
      <Week
        Name="In theaters"
        Data={requests.Intheaters} />
      <Week
        Name="Coming soon to theaters"
        Data={requests.UpcomingMovies} />
      <Serial />  
    </div>
  )
}

export default Home