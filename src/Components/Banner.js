import React, { useEffect, useState } from 'react';
import axios from "axios";
import Slidere from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Skeleton from '@mui/material/Skeleton';

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
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=251ac7a461ba588030cfa89b0cd75329');
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
        //  Array.from(new Array(6)).map((_, index) => (
        //     <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        //       <Skeleton variant='rectangular' width={210} height={300} />
        //       <Box sx={{ pr: 2 }}>
        //         <Skeleton />
        //         <Skeleton width='20%' padding="30px"/>
        //         <Skeleton width='60%' />
        //         <Skeleton width='40%' />
        //         <Skeleton width='40%' />
        //       </Box>
        //     </Box>
        // ))
        :movies.map((item) => (
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

export default Banner;
