import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import requests from '../../../server/Server';
import { useParams } from 'react-router-dom';
import './Detail.css';

function Detail() {
  const { apiEndpoint, index } = useParams();
  console.log(index,"index");
  console.log(apiEndpoint,"apiEndpoint");

  const [single, setSingle] = useState({});

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`https://api.themoviedb.org/3/${apiEndpoint}`);
      console.log(response?.data?.results[index]);
      setSingle(response?.data?.results[index]);
    }

    fetchData();
  }, [index, apiEndpoint]);

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
// import './Detail.css';

// function Detail() {
//   const { index , SerialLink} = useParams();
//   console.log(index);
//   console.log(SerialLink);

//   const [single, setSingle] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${SerialLink}`);
//       console.log(response.data.results[index]);
//       setSingle(response.data.results[index]);
//     }

//     fetchData();
//   }, [index , SerialLink]);

//   return (
//     <div className='Container'>
//       <h1>Details</h1>

//       {Object.keys(single).length !== 0 && (
//         <>
//         <div className='box'>
//           <div className='Single-contain'>
//             <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//           </div>

//           <div className='lists'>
//             <h2>{single.original_title}</h2>
           
//              <p>{single.overview}</p>
            
//           </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Detail;









// Detail.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import './Detail.css';

// function Detail() {
//   const { index, apiEndpoint } = useParams();
//   console.log(apiEndpoint)
//   console.log(index)

//   const [single, setSingle] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${apiEndpoint}`);
//       setSingle(response.data.results[index]);
//       console.log(response.data.results[index]);
//     }

//     fetchData();
//   }, [index]);

//   return (
//     <div className='Container'>
//       <h1>Details</h1>

//       {Object.keys(single).length !== 0 && (
//         <div className='box'>
//           <div className='Single-contain'>
//             <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//           </div>

//           <div className='lists'>
//             <h2>{single.original_title}</h2>
//             <p>{single.overview}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Detail;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import './Detail.css';

// function Detail() {
//   const { index, apiEndpoint } = useParams();
//   console.log(apiEndpoint);
//   console.log(index);

//   const [single, setSingle] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       let response = await axios.get(`https://api.themoviedb.org/3/${apiEndpoint}`);
//       setSingle(response.data.results[index]);
//       console.log(response.data.results[index]);
//     }

//     fetchData();
//   }, [index, apiEndpoint]);

//   return (
//     <div className='Container'>
//       <h1>Details</h1>

//       {Object.keys(single).length !== 0 && (
//         <div className='box'>
//           <div className='Single-contain'>
//             <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//           </div>

//           <div className='lists'>
//             <h2>{single.original_title}</h2>
//             <p>{single.overview}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Detail;
