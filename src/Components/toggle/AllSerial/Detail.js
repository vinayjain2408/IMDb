import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { MyContext } from '../../../App';

function Detail() {
  const {SerialLink} = useContext(MyContext)
  const { index } = useParams();
  console.log(index);

  const [single, setSingle] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3${SerialLink}`);
        console.log(response.data.results[index]);
        setSingle(response.data.results[index]);
      } catch (error) {
        console.error('Error fetching single data:', error);
      }
    }

    fetchData();
  }, [index, SerialLink]);

  return (
    <div className="Container">
      <h1>Details</h1>

      {Object.keys(single).length !== 0 && (
        <>
          <div className="box">
            <div className="Single-contain">
              <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt="Poster" />
            </div>

            <div className="lists">
              <h2>{single.original_title || single.original_name}</h2>
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
//   const { index , SerialLink } = useParams();
//   console.log(index);

//   const [single, setSingle] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let response = await axios.get(`https://api.themoviedb.org/3/${SerialLink}`);
//         console.log(response.data.results[index]);
//         setSingle(response.data.results[index]);
//       } catch (error) {
//         console.error('Error fetching single data:', error);
//       }
//     }

//     fetchData();
//   }, [index, SerialLink]);

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     let response = await axios.get(`https://api.themoviedb.org/3/${SerialLink}`);
//   //     console.log(response.data.results[index]);
//   //     setSingle(response.data.results[index]);
//   //   }

//   //   fetchData();
//   // }, [index]);

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
















// Single Api have one Object Data show in Single Page

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import requests from '../../../server/Server';
// import { useParams } from 'react-router-dom';
// import './Detail.css';

// function Detail() {
//   const { index } = useParams();
//   console.log(index)
//   // const { movieId } = useParams();

//   const [single, setSingle] = useState({});



//   useEffect(() => {
//     async function fetchData() {    
//       let response = await axios.get(`https://api.themoviedb.org/3/${requests.popularMovie}`);
//       console.log(response.data.results[index]);
//       setSingle(response.data.results[index]);
//       // console.log(response?.data?.results);
//       // setSingle(response?.data?.results);
//     }

//     fetchData();
//   }, [index]);

//   return (
//     <div className='Container'>
//       <h1>Details</h1>

//       {Object.keys(single).length !== 0 && (
//         <>
//           <div className='box'>
//             <div className='Single-contain'>
//               <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
//             </div>

//             <div className='lists'>
//               <h2>{single.original_title}</h2>
//               <p>{single.overview}</p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Detail;








