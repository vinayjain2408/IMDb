import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <>
        <div className='header'>
            <div className='menu'>
                <h3>IMDb</h3>
                <MenuIcon />
                <a href=''> Menu</a>
            </div>

            <div className='input'>
                <button>All</button>
                <input type='text' placeholder='Search IMDb'></input>
                <button><SearchIcon ></SearchIcon></button>
            </div>
            <div className='menu'>
                <a href=''><FormatListBulletedIcon /> Wishlist</a>
                <a href=''>Sign In</a>
            </div>
        </div>

        
        </>
    )
}

export default Header