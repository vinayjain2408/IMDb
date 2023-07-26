import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import requests from '../../server/Server';
import './Axios.css';
import { Link } from 'react-router-dom';

function Axios() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
  };

  const [axiosLink, setAxiosLink] = useState(requests.Week);
  const [loading, setLoading] = useState(true);
  const [week, setWeek] = useState([]);

  function handleChange(type) {
    if (type === 'day') {
      setAxiosLink(requests.Week);
    } else if (type === 'week') {
      setAxiosLink(requests.featureDay);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(`https://api.themoviedb.org/3/${axiosLink}`);
        setWeek(response.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, [axiosLink]);

  return (
    <>
      <div className='btn'>
        <button onClick={() => handleChange('day')}>day</button>
        <button onClick={() => handleChange('week')}>Week</button>
      </div>

      <div className='top-week'>
        <h2>Recent</h2>
        <Slider {...settings}>
          {loading
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
            : week.map((movie, index) => (
                <div key={index} className='Movie-detail'>
                  <Link to={`movie/detail/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <div className='contain'>
                    <p>
                      <StarIcon className='icon' />
                      {movie.vote_average}
                    </p>
                    <p>
                      {index + 1}. {movie.original_title}
                    </p>
                    <div className='list'>
                      <a href=''>
                        <AddIcon /> Watchlist
                      </a>
                      <a href=''>
                        <PlayArrowIcon /> Trailer
                      </a>
                    </div>
                    {/* <Link to={`movie/detail/${movie.id}`}><button>Detail</button></Link> */}
                  </div>
                
                </div>
              ))}
        </Slider>
      </div>
    </>
  );
}

export default Axios;









// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import StarIcon from '@mui/icons-material/Star';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import Slider from "react-slick";
// import ReactSwitch from 'react-switch';
// import requests from '../../server/Server';
// import "./Axios.css"

// function Axios(props) {


// var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     initialSlide: 1,
//   };


//   const [axiosLink, setAxiosLink] = useState(requests.featureDay);
//   // const [checked, setChecked] = useState(false);
//   const [loading, setLoading] = useState(true);

//   function handleChange(type) {
//     if (type === 'day') {
//       setAxiosLink(requests.Week);
//     } else if (type === 'week') {
//       setAxiosLink(requests.featureDay);
//     }
//     // setAxiosLink(type)
//   }


//   const [week, setWeek] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${axiosLink}`);
//       setWeek(response.data.results);
//       setLoading(false)
//     }

//     fetchData();
//   }, [axiosLink]);

//   return (
//     <>
//        <div className='btn'>
//         <button onClick={() => handleChange('day')}>day</button>
//         <button onClick={() => handleChange('week')}>Week</button>
//       </div>
   

//       <div className='top-week'>
//         <h2>Recent </h2>
//         <Slider {...settings}>



          
//           {
          
        

//           week.map((movie, index) => (
//             <div key={index} className='Movie-detail'>
//               <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  />
//               <div className='contain'>
//                 <p><StarIcon className='icon' />{movie.vote_average}</p>
//                 <p>{index + 1}. {movie.original_title}</p>
//                 <div className='list'>
//                   <a href=''><AddIcon /> Watchlist</a>
//                   <a href=''><PlayArrowIcon /> Trailer</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>



//       </div>
//     </>
//   );
// }

// export default Axios;
