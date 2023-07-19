import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Detail.css';

function Detail(props) {
  const { checkType, id } = useParams();
  const [single, setSingle] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${checkType}/${id}?api_key=251ac7a461ba588030cfa89b0cd75329`);
        console.log(response.data, "response");
        setSingle(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [checkType, id]);


  const [Video , setVideo] = useState([])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/${checkType}/${id}/videos?api_key=251ac7a461ba588030cfa89b0cd75329`);
      console.log(result.data.results, "response");
      setVideo(result.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(Video.name)

  return (
    <>
      <div className='box' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${single.backdrop_path})` }}>
        <div className='text'>
          <h1>Details</h1>
        </div>
        <div className='flex-box'>
          <div className='Single-contain'>
            <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt='Poster' />
          </div>
          <div className='lists'>
            <h2>{single.original_title || single.original_name}</h2>
            <p>{single.tagline}</p>
            <p>{single.overview}</p>
            <p>Rating: {single.vote_average}/10</p>
            <p>{single.status}</p>
            <p>
              {single.genres &&
                single.genres.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
            </p>
            <a href='' onClick={handleClick}>Trailer</a>
          </div>
        </div>
      </div>

      <div>
        <iframe
          key={Video?.length !==0 ? Video[0]?.key : null}
          width="560"
          height="350"
          src={`http://www.youtube.com/embed/${Video?.length !==0 ? Video[0]?.key : null}`}
          title="youtube video"
        ></iframe>
        {/* <modal key={key} /> */}

      
      </div>
    </>
  );
}

export default Detail;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import { Link, useParams } from 'react-router-dom';
// import './Detail.css';

// function Detail() {
//   const { checkType, id } = useParams()
//   // const { movieId } = useParams();

//   const [Single, setSingle] = useState({});



//   useEffect(() => {
//     async function fetchData() {

//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/${checkType}/${id}?api_key=251ac7a461ba588030cfa89b0cd75329`);
//         console.log(response.data, "response");
//         setSingle(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, [checkType, id]);

//   function handleClick() {
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=251ac7a461ba588030cfa89b0cd75329`);
//           console.log(result.data, "response");
//           setSingle(result.data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }
  
//       fetchData();
//     }, [id]);
//   }
  
 


//   return (


//     <>
//       <div className='box' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${Single.backdrop_path})` }}>

//         <div className='text'>
//           <h1>Details</h1>
//         </div>

//         <div className='flex-box'>


//           <div className='Single-contain' >
//             <img src={`https://image.tmdb.org/t/p/original${Single.poster_path}`} alt='Poster' />
//           </div>



//           <div className='lists'>
//             <h2>{Single.original_title || Single.original_name}</h2>
//             <p>{Single.tagline}</p>
//             <p>{Single.overview}</p>
//             <p>Rating: {Single.vote_average}/10</p>
//             <p>{Single.status}</p>
//             <p>
//               {Single.genres &&
//                 Single.genres.map((item) => (
//                   <span>{item.name}</span>
//                 ))}
//             </p>
//             <a href='' onClick={() => handleClick()}>Trailer</a>

          

//           </div>

//         </div>
//       </div>
//     </>


//   );
// }

// export default Detail;






// We can show Single Detail with the help useContext


// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './Detail.css';
// import { MyContext } from '../../../App';

// function Detail() {
//   const {SerialLink} = useContext(MyContext)
//   const { index } = useParams();
//   console.log(index);

//   const [single, setSingle] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3${SerialLink}`);
//         console.log(response.data.results[index]);
//         setSingle(response.data.results[index]);
//       } catch (error) {
//         console.error('Error fetching single data:', error);
//       }
//     }

//     fetchData();
//   }, [index, SerialLink]);

//   return (
//     <div className="Container">
//       <h1>Details</h1>

//       {Object.keys(single).length !== 0 && (
//         <>
//           <div className="box">
//             <div className="Single-contain">
//               <img src={`https://image.tmdb.org/t/p/original${single.poster_path}`} alt="Poster" />
//             </div>

//             <div className="lists">
//               <h2>{single.original_title || single.original_name}</h2>
//               <p>{single.overview}</p>
//             </div>
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

