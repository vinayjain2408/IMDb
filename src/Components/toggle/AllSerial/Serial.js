
// This code run with context Api

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Serial.css';
import { MyContext } from '../../../App';

function Serial() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 1,
  };

  const { SerialLink, handleSerial } = useContext(MyContext);

  const [serial, setSerial] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3${SerialLink}`);
        console.log(response.data.results);
        setSerial(response.data.results);
      } catch (error) {
        console.error('Error fetching serial data:', error);
      }
    }

    fetchData();
  }, [SerialLink]);

  return (
    <>
      <div className='btn'>
        <button onClick={() => handleSerial('movie')}>Movie</button>
        <button onClick={() => handleSerial('tv')}>Serial</button>
      </div>

      <div className="top-week">
        <h2>Popular TV & Movies Shows</h2>
        <Slider {...settings}>
          {serial && serial.map((movie, index) => (
            <div key={index} className="Movie-detail">
              <Link to={`/detail/${index}`}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
              </Link>
              <div className="contain">
                <p>{movie.vote_average}</p>
                <p>
                  {index + 1}. {movie.original_title || movie.original_name}
                </p>
                <div className="list">
                  <a href="">
                    <AddIcon /> Watchlist
                  </a>
                  <a href="">
                    <PlayArrowIcon /> Trailer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Serial;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import ReactSwitch from 'react-switch';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import './Serial.css';

// function Serial() {
//   const navigate = useNavigate();

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     initialSlide: 1,
//   };

//   const [SerialLink, setSerialLink] = useState(requests.popularMovie);
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//     if (SerialLink === requests.popularMovie) {
//       setSerialLink(requests.popularTV);
//     } else {
//       setSerialLink(requests.popularMovie);
//     }
//   };

//   const [Serial, setSerial] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3${SerialLink}`);
//         console.log(response.data.results);
//         setSerial(response.data.results);
//       } catch (error) {
//         console.error('Error fetching serial data:', error);
//       }
//     }

//     fetchData();
//   }, [SerialLink]);

//   const handleClick = (index) => {
//     navigate(`/detail/${index}/${SerialLink}`);
//   };

//   return (
//     <>
//       <ReactSwitch checked={checked} onChange={handleChange} />

//         <div className="top-week">
//           <h2>Popular TV & Movies Shows</h2>
//           <Slider {...settings}>
//             {Serial.map((movie, index) => (
//               <div key={index} className="Movie-detail">
//                 <a href="" onClick={() => handleClick(index)}>
//                   <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
//                 </a>
//                 <div className="contain">
//                   <p>{movie.vote_average}</p>
//                   <p>
//                     {index + 1}. {movie.original_title || movie.original_name}
//                   </p>
//                   <div className="list">
//                     <a href="">
//                       <AddIcon /> Watchlist
//                     </a>
//                     <a href="">
//                       <PlayArrowIcon /> Trailer
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//     </>
//   );
// }

// export default Serial;

















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { Link, useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import ReactSwitch from 'react-switch';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import './Serial.css';

// function Serial() {
//   const navigate = useNavigate();

//   // const [activeButton, setActiveButton] = useState(null);

//   // const handleButtonClick = (buttonName) => {
//   //   setActiveButton(buttonName);
//   // };

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     initialSlide: 1,
//   };

//   const [SerialLink, setSerialLink] = useState(requests.popularMovie);
//   const [checked, setChecked] = useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//     if (SerialLink === requests.popularMovie) {
//       setSerialLink(requests.popularTV);
//     } else {
//       setSerialLink(requests.popularMovie);
//     }
//   };

//   const [Serial, setSerial] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/${SerialLink}`);
//         console.log(response.data.results);
//         setSerial(response.data.results);
//       } catch (error) {
//         console.error('Error fetching serial data:', error);
//       }
//     }

//     fetchData();
//   }, [SerialLink]);

//   const handleClick = (index) => {
//     navigate(`/detail/${index}/${SerialLink}`);
//   };

//   return (
//     <>
//       <ReactSwitch checked={checked} onChange={handleChange} />

//       <div className="top-week">
//         <h2>Popular TV & Movies Shows</h2>
//         <Slider {...settings}>
//           {Serial.map((movie, index) => (
//             <div key={index} className="Movie-detail">
//               <a href="" onClick={() => handleClick(index)}>
//                 <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
//               </a>
//               <div className="contain">
//                 <p>{movie.vote_average}</p>
//                 <p>
//                   {index + 1}. {movie.original_title || movie.original_name}
//                 </p>
//                 <div className="list">
//                   <a href="">
//                     <AddIcon /> Watchlist
//                   </a>
//                   <a href="">
//                     <PlayArrowIcon /> Trailer
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default Serial;










// Single Api show in Detail Page when we use this method






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// function Serial() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 6,
//     initialSlide: 1,
//   };

//   const [Serial, setSerial] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}`);
//       console.log(response.data.results);
//       setSerial(response.data.results);
//     }

//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className='top-week'>
//         <h2>Popular TV & Movies Shows</h2>
//         <Slider {...settings}>
//           {Serial.map((movie, index) => (
//             <div key={index} className='Movie-detail'>
//               <Link to={`/detail/${index}`}>
//                 <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
//               </Link>
//               <div className='contain'>
//                 <p>{movie.vote_average}</p>
//                 <p>
//                   {index + 1}. {movie.original_title || movie.original_name}
//                 </p>
//                 <div className='list'>
//                   <a href=''>
//                     <AddIcon /> Watchlist
//                   </a>
//                   <a href=''>
//                     <PlayArrowIcon /> Trailer
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }


  


// export default Serial;


