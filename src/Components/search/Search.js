import React, { useState, useEffect } from 'react';
import './Search.css';
import axios from 'axios';
import Slider from "react-slick";
import { useParams } from 'react-router-dom';

function Search() {
    const { inputValue } = useParams()
    console.log(inputValue)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 1,
    };


    const [search, setSearch] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=251ac7a461ba588030cfa89b0cd75329&query=${inputValue}`);
            setSearch(response.data.results);
            console.log(response.data.results)
        }
        fetchData()
    }, [inputValue])

    let movies_default = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"

    return (
        <>
        <div className='search-text'>
        <h1>Searched Movie</h1>
        </div>
        <div className='search'>
            <Slider {...settings}>
                {
                    search.map((items) => {

                        return (
                            <div className='movie-search' >
                                <img src={(items.poster_path === null) ? movies_default : `https://image.tmdb.org/t/p/original${items.poster_path}`}></img>
                                <h3>{items.title}</h3>
                                <p>{items.release_date}</p>
                            </div>
                        )

                    })
                }
            </Slider>
        </div>
        </>
    )
}

export default Search













// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Skeleton from '@mui/material/Skeleton';

// const data = [
//   {
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
//     title: 'Queen - Greatest Hits',
//     channel: 'Queen Official',
//     views: '40M views',
//     createdAt: '3 years ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130M views',
//     createdAt: '10 months ago',
//   },
// ];

// function Media(props) {
//   const { loading = false } = props;

//   return (
//     <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//           {item ? (
//             <img
//               style={{ width: 210, height: 118 }}
//               alt={item.title}
//               src={item.src}
//             />
//           ) : (
//             <Skeleton variant="rectangular" width={210} height={118} />
//           )}

//           {item ? (
//             <Box sx={{ pr: 2 }}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography display="block" variant="caption" color="text.secondary">
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ pt: 0.5 }}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// Media.propTypes = {
//   loading: PropTypes.bool,
// };

// export default function YouTube() {
//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       <Media loading />
//       <Media />
//     </Box>
//   );
// }