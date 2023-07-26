import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

function Moviedetail() {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const [ video , setVideo] = useState([])
    const [modal , setModal] = useState(false)

    useEffect(() => {
        async function data() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=251ac7a461ba588030cfa89b0cd75329`)
            console.log(response.data)
            setDetail(response.data)
        }
        data()
    }, [])

    function handleTrailerClick() {
        try {
            async function trailer() {
                let result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=251ac7a461ba588030cfa89b0cd75329`)
                console.log(result.data.results)
                setVideo(result.data.results)
                setModal(!modal)
            }
            trailer()
        }
        catch {
            console.log("error in comming in axios")
        }
    }

    function toggleModal(){
        console.log("vinay jain")
        setModal(!modal);
    }

    return (
        <div>
            {
                <div className='box' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})` }}>
                    <div className='text'>
                        <h1>Movie Details</h1>
                    </div>
                    <div className='flex-box'>
                        <div className='Single-contain'>
                            <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} alt='Poster' />
                        </div>
                        <div className='lists'>
                            <h2>{detail.original_title || detail.original_name}</h2>
                            <p>{detail.tagline}</p>
                            <p>{detail.overview}</p>
                            <p>Rating: {detail.vote_average}/10</p>
                            <p>{detail.status}</p>
                            <p className='para'>
                                {detail.genres &&
                                    detail.genres.map((item) => (
                                        <span key={item.id}>{item.name}</span>
                                    ))}
                            </p>
                            <button onClick={handleTrailerClick}>Trailer </button>
                        </div>
                    </div>
                </div>
            }



            <Modal show={modal} size="lg">

                <div className='tailer-modal' >
                    <button onClick={toggleModal}>X</button>
                    <iframe
                        key={video?.length !== 0 ? video[0]?.key : null}
                        width="800"
                        height="500"
                        src={`https://www.youtube.com/embed/${video?.length !== 0 ? video[0]?.key : null}`}
                        title="youtube video"
                    ></iframe>
                </div>

            </Modal>
        </div>
    )
}

export default Moviedetail