import React from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Wishlist from './Components/Wishlist'
import Week from './Components/this week/Week'
import Footer from './Components/Footer'
import requests from './server/Server'
// import Favorites from "./Components/favourite/Favorites"


function App() {
  return (
    <div>
      <Header />
      <Slider />

      <Week
        Name="Featured today"
        Data={requests.featureDay} />

      <Wishlist />

      <Week
        Name="Top 10 on IMDb this week"
        Data={requests.Week} />
      <Week
        Name="Fan favorites"
        Data={requests.TopRated} />
      <Week
        Name="In theaters"
        Data={requests.Intheaters} />
      <Week
        Name="Coming soon to theaters"
        Data={requests.UpcomingMovies} />
      <Week
        Name="Popular"
        Data={requests.fetchpopular} />
      <Footer />
    </div>
  )
}

export default App