import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Week.css"
import Slider from "react-slick";

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
  useEffect(() => {

    async function fetchData() {
      let response = await axios.get(`https://api.themoviedb.org/3/`+ props.Data)
   
      setWeek(response.data.results)
    }

    fetchData()
  }, [])

  return (
    <div className='top-week'>
      <h2>{props.Name}</h2>
      <Slider {...settings}>
        {
          week.map((movie, index) => {
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