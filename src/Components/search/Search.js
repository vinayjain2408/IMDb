import React, { useState, useEffect } from 'react';
import './Header.css';
import axios from 'axios';
import Slider from "react-slick";

function Search() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 1,
      };

      
  const [search, setSearch] = useState([]);
  
      
    
     
        async function handleSearch() {
          try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=251ac7a461ba588030cfa89b0cd75329&query=${inputValue}`);
            setSearch(response.data.results);
            console.log(response.data.results)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          setInputValue("")
        }
    
      let movies_default = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
    
  return (
    <div>
    <Slider {...settings}>
      {
        search.map((items)=>{
          
            return(
                <div className='movie-search' >
                    <img src={(items.poster_path === null)?movies_default:`https://image.tmdb.org/t/p/original${items.poster_path}`}></img>
                    <h3>{items.title}</h3>
                </div>
            )

        })
      }
      </Slider>
    </div>
  )
}

export default Search