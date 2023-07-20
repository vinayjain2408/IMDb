import React, { useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


function Header() {
  const [inputValue, setInputValue] = useState('');
  function changeInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className='header'>
        <div className='menu'>
          <h3>IMDb</h3>
          
          <Link to="/"> Home</Link>
          <a href=''><MenuIcon /> Menu</a>
        </div>

        <div className='input'>
          <button>All</button>
          <input type='text' placeholder='Search IMDb' onChange={changeInput} value={inputValue} />
          <Link to={`search/${inputValue}`} ><SearchIcon /></Link>
        </div>
        <div className='menu'>
          <a href=''>
            <FormatListBulletedIcon />
            Wishlist
          </a>
          <a href=''>Sign In</a>
        </div>
      </div>
      <div className='Slider-box'>
      
     
      </div>
    </>
  );
}

export default Header;








// import React ,{useState ,useEffect} from 'react'
// import "./Header.css"
// import MenuIcon from '@mui/icons-material/Menu';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import SearchIcon from '@mui/icons-material/Search';
// import axios from 'axios';

// function Header() {
//     const [search , SetSearch] = useState([])
//     let [inputValue, setInputValue] = useState('')

//     function changeInput(e){
//         setInputValue(e.target.value)
//     }

//     useEffect(() => {
//         async function SearchValue() {
//           try {
//             const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=251ac7a461ba588030cfa89b0cd75329&query=${inputValue}`);
//             SetSearch(response.data);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         }
    
//         SearchValue();
//       }, []);


//     return (
//         <>
//         <div className='header'>
//             <div className='menu'>
//                 <h3>IMDb</h3>
//                 <MenuIcon />
//                 <a href=''> Menu</a>
//             </div>

//             <div className='input'>
//                 <button>All</button>
//                 <input type='text' placeholder='Search IMDb' onChange={changeInput} value={inputValue}></input>
//                 <button onClick={SearchValue}><SearchIcon ></SearchIcon></button>
//             </div>
//             <div className='menu'>
//                 <a href=''><FormatListBulletedIcon /> Wishlist</a>
//                 <a href=''>Sign In</a>
//             </div>
//         </div>
        
        
//         </>
//     )
// }

// export default Header