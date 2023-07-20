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
    }, [])

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