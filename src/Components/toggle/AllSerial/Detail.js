import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../../server/Server';
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Detail.css';

function Detail() {
  const { index } = useParams();
  console.log(index);

  const [single, setSingle] = useState({});

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}`);
      console.log(response.data.results[index]);
      setSingle(response.data.results[index]);
    }

    fetchData();
  }, [index]);

  return (
    <div className='Container'>
      <h1>Details</h1>

      {Object.keys(single).length !== 0 && (
        <>
        <div className='box'>
          <div className='Single-contain'>
            <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
          </div>

          <div className='lists'>
            <h2>{single.original_title}</h2>
           
             <p>{single.overview}</p>
            
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import './Detail.css';

// function Detail() {
//   const { index } = useParams();
//   console.log(index)

//   const [single, setSingle] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}`);
//       console.log(response.data[1]);
//       setSingle(response.data[1]);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Hello vinay jain</h1>

//         (
//         <>
//           <div className='Single-contain'>
//             <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`}  />
//           </div>
//           <div className='lists'>
//             <p>{single.vote_average}</p>
//             <p>{single.original_title}</p>
//             <div>
//               <a href=''>
//                 <AddIcon /> Watchlist
//               </a>
//               <a href=''>
//                 <PlayArrowIcon /> Trailer
//               </a>
//             </div>
//           </div>
//         </>
//       )
//     </div>
//   );
// }

// export default Detail;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import './Detail.css';

// function Detail() {
//   const { id } = useParams();
//   console.log(id);

//   const [single, setSingle] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}/${id}`);
//       console.log(response.data);
//       setSingle(response.data);
//     }

//     fetchData();
//   }, [id]); // Add 'id' to the dependency array

//   return (
//     <div>
//       <h1>Hello vinay jain</h1>

//       {single && (
//         <>
//           <div className='Single-contain'>
//             <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//           </div>
//           <div class>
//             <p>{single.vote_average}</p>
//             <p>{single.original_title}</p>
//             <div className='lists'>
//               <a href=''>
//                 <AddIcon /> Watchlist
//               </a>
//               <a href=''>
//                 <PlayArrowIcon /> Trailer
//               </a>
//               <p>{single.original_title}</p>
//               <p>{single.overview}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Detail;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import './Detail.css'

// function Detail() {
//   const { id } = useParams();
//   console.log(id);

//   const [single, setSingle] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}`);
//       console.log(response.data.results);
//       setSingle(response.data.results[1]);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Hello vinay jain</h1>

//       {single && (
//         <>
//         <div className='Single-contain'>
//           <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//           </div>
//           <div class>
//           <p>{single.vote_average}</p>
//           <p>{single.original_title}</p>
//           <div className='lists'>
//             <a href=''>
//               <AddIcon /> Watchlist
//             </a>
//             <a href=''>
//               <PlayArrowIcon /> Trailer
//             </a>
//             <p>{single.original_title}</p>
//             <p>{single.overview}</p>
//           </div>
//         </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Detail;


