import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css"

function Footer() {
  return (
    <div>
       <div className='anchor'> <a href=''>Sign in for more access</a></div>

     
       <ul className='content'>
            <li><a href=''><MusicNoteIcon /></a></li>
            <li><a href=''><InstagramIcon /></a></li>
            <li><a href=''><TwitterIcon /></a></li>
            <li><a href=''><YouTubeIcon /></a></li>
            <li><a href=''><FacebookIcon /></a></li>
        </ul>
     

        <ul className='content'>
            <li><a href=''>Get the IMDb App</a></li>
            <li><a href=''>Help</a></li>
            <li><a href=''>Site Index</a></li>
            <li><a href=''>IMDbPro</a></li>
            <li><a href=''>Box Office Mojo</a></li>
            <li><a href=''>IMDb Developer</a></li>
        </ul>

    
        <ul className='content'>
            <li><a href=''>Press Room</a></li>
            <li><a href=''>Advertising</a></li>
            <li><a href=''>Jobs</a></li>
            <li><a href=''>Conditions of Use</a></li>
            <li><a href=''>Privacy Policy</a></li>
            <li><a href=''>Your Ads Privacy Choices</a></li>
        </ul>
        
        <div className='end'>
        <p>an amazon company</p>
        <p>© 1990-2023 by IMDb.com, Inc.</p>
        </div>
    </div>
  )
}

export default Footer