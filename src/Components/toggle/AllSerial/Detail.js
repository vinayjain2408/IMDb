import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Detail.css';
import { Button, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function Detail() {
  const { checkType, id } = useParams();
  const [single, setSingle] = useState({});
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/${checkType}/${id}?api_key=251ac7a461ba588030cfa89b0cd75329`);
        setSingle(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [checkType, id]);

  const handleTrailerClick = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(`https://api.themoviedb.org/3/${checkType}/${id}/videos?api_key=251ac7a461ba588030cfa89b0cd75329`);
      setVideo(result.data.results);
      // setModal(true);
      setModal(!modal);
      console.log(modal)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  


  return (
    <>
    {
      loading ?
      <Skeleton variant="rectangular" width="100%" className='box'>
      <div style={{ paddingTop: '57%' }} />
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Skeleton variant='rectangular' width={210} height={300} />
      </Box>
      <Box sx={{ pr: 2 }}>
          <Skeleton />
          <Skeleton width='80%' padding="30px"/>
          <Skeleton width='60%' />
          <Skeleton width='40%' />
          <Skeleton width='40%' />
        </Box>
    </Skeleton>
:
    
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
            <p className='para'>
              {single.genres &&
                single.genres.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
            </p>
            <button onClick={handleTrailerClick}>Trailer </button>
          </div>
        </div>
      </div>
}

      


        <Modal show={modal }  size="lg">
              
          <div className='tailer-modal' >
            <button onClick={toggleModal}>X</button>
          <iframe
           key={video?.length !==0 ? video[0]?.key : null}
           width="800"
           height="500"
           src={`https://www.youtube.com/embed/${video?.length !==0 ? video[0]?.key : null}`}
           title="youtube video"
           ></iframe> 
           </div>

           </Modal>

    </>
  );
}

export default Detail;



    {/* <ReactPlayer controls={true} url={`http://www.youtube.com/embed/${video?.length !==0 ? video[0]?.key : null}`} height="500px" width="750px"
          ></ReactPlayer> */}



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

