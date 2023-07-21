import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Week.css"
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function Week(props) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
   
  };

  const [week, setWeek] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {
      let response = await axios.get(`https://api.themoviedb.org/3/`+ props.Data)
      setWeek(response.data.results)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className='top-week'>
      <h2>{props.Name}</h2>
      <Slider {...settings}>
        {
          loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                <Skeleton variant='rectangular' width={210} height={300} />
                <Box sx={{ pr: 2 }}>
                  <Skeleton />
                  <Skeleton width='20%' padding="30px"/>
                  <Skeleton width='60%' />
                  <Skeleton width='40%' />
                  <Skeleton width='40%' />
                </Box>
              </Box>
            ))
          : week.map((movie, index) => {
            return (
              <div key={index} className='Movie-detail'>
                <img src={`https://image.tmdb.org/t/p/original` + movie.poster_path} />
                <div className='contain'>
                <p><StarIcon className='icon' />{movie.vote_average}</p>
                <p>{index + 1}. {movie.original_title}</p>
                <div className='list'>
                  <a href=''><AddIcon /> Watchlist</a>
                  <a href=''><PlayArrowIcon /> Trailer</a>
                </div>
                </div>

              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Week