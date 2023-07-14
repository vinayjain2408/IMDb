import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../../server/Server';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Detail() {
  const { id } = useParams();
  console.log(id);

  const [movie, setSingle] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${requests.popularMovie}/${id}`
        );
        console.log(response.data.results);
        setSingle(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Hello vinay jain</h1>
               
        <img src={`https://image.tmdb.org/t/p/original` + movie.poster_path} />
        <div className='contain'>
          <p><StarIcon className='icon' />{movie.vote_average}</p>
          <p> {movie.original_title}</p>
          {/* <div className='list'>
            <a href=''><AddIcon /> Watchlist</a>
            <a href=''><PlayArrowIcon /> Trailer</a>
          </div> */}
        </div>
     
    </div>
  );
}

export default Detail;





// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import requests from '../../../server/Server'
// import { useParams } from 'react-router-dom'

// function Detail() {
//     const {id} = useParams()
//     console.log(id)

//     const [Single, setSingle] = useState('')
//     useEffect(() => {

//         async function fetchData() {
//             let response = await axios.get(`https://api.themoviedb.org/3/` + requests.popularMovie+id)
//             console.log(response.data.results)
//             setSingle(response.data.results)
//         }

//         fetchData()
//     }, [])


//     return (
//         <div>
//             <h1>Hello vinay jain</h1>
// {/*          
//              <img src={`https://image.tmdb.org/t/p/original` + movie.poster_path} />         
//                 <div className='contain'>
//                 <p><StarIcon className='icon' />{movie.vote_average}</p>
//                 <p>{index + 1}. {movie.original_title}</p>
//                 <div className='list'>
//                   <a href=''><AddIcon /> Watchlist</a>
//                   <a href=''><PlayArrowIcon /> Trailer</a>
//                 </div>
//                 </div> */}

//         </div>
//     )
// }

// export default Detail