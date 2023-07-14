import React, { useEffect, useState } from 'react';
import axios from "axios";
import Slidere from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  const [movies, setMovies] = useState([]);  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=251ac7a461ba588030cfa89b0cd75329');
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='slider-container'>
      <Slidere {...settings}>
        {movies.map((item) => (
          <div key={item.id} className='slide'>
      
            <div className='slide-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }} >
            <h3>{item.original_title}</h3>
            </div>
          </div>
        ))}
      </Slidere>
    </div>
  );
}

export default Slider;
