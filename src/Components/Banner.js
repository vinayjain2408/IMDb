import React, { useEffect, useState } from 'react';
import axios from "axios";
import Slidere from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Skeleton from '@mui/material/Skeleton';
import requests from '../server/Server';
import { Link } from 'react-router-dom';

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

function Banner() {
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
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/`+requests.UpcomingMovies);
        // console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='slider-container'>
      <Slidere {...settings}>
        {
        loading
        ?
        <Skeleton variant="rectangular" width={210} height={500} />
        :movies.map((item) => (
          <div key={item.id} className='slide'>
            
            <Link to={`movie/detail/${item.id}`}>
            <div className='slide-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }} >
            <h3>{item.original_title}</h3>
            </div>
            </Link>
          </div>
        ))}
      </Slidere>
    </div>
  );
}

export default Banner;
