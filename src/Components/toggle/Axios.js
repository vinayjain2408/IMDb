import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Slider from "react-slick";
import ReactSwitch from 'react-switch';
import requests from '../../server/Server';
import "./Axios.css"

function Week(props) {


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
  };


  const [axiosLink, setAxiosLink] = useState(requests.featureDay);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    if (axiosLink === requests.featureDay) {
      setAxiosLink(requests.Week);
    } else {
      setAxiosLink(requests.featureDay);
    }
  };


  const [week, setWeek] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`https://api.themoviedb.org/3/${axiosLink}`);
      setWeek(response.data.results);
    }

    fetchData();
  }, [axiosLink]);

  return (
    <>
      <ReactSwitch checked={checked} onChange={handleChange} />

      <div className='top-week'>
        <h2>{props.Name}</h2>
        <Slider {...settings}>
          {week.map((movie, index) => (
            <div key={index} className='Movie-detail'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  />
              <div className='contain'>
                <p><StarIcon className='icon' />{movie.vote_average}</p>
                <p>{index + 1}. {movie.original_title}</p>
                <div className='list'>
                  <a href=''><AddIcon /> Watchlist</a>
                  <a href=''><PlayArrowIcon /> Trailer</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Week;