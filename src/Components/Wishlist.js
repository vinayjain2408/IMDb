import React from 'react'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Wishlist.css"
function Wishlist() {
  return (
    <div>
        <div className='watch'>
            <h1>What to watch</h1>
            <p>Get more recommendations <KeyboardArrowRightIcon /></p>
        </div>
        <div className='line'>

        <h2>From Your Watchlist <KeyboardArrowRightIcon /></h2>
        </div>
        <div className='watch-detail'>
            <p><AddToPhotosIcon /></p>
            <p>Sign in to access your Watchlist</p>
            <p>Save shows and movies to keep track of what you want to watch.</p>
            <a href=''> Sign in to TMDb</a>
        </div>
    </div>
  )
}

export default Wishlist