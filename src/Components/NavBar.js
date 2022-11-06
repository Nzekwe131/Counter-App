import React,{useRef} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Link} from 'react-router-dom';
import './Nav.css'

const NavBar = () => {
  const NavRef = useRef()

  const shownavlink =()=>{
    NavRef.current.classList.toggle('responsive-nav')
  }

  return (
   <>
 <header className= 'header'>
      <h1>MICKY</h1>
   
      <nav ref={NavRef}>
      <Link to='counter'>Counter</Link>
      <Link to='/errorpage'>Errropage</Link>
      <Link to='error'>Errorboundary</Link>
     
    <button
    className='nav-btn nav-close'
     onClick={shownavlink}>
        <CloseIcon/>
    </button>
      </nav>
      <button
      className='nav-btn'
       onClick={shownavlink}>
      <MenuOpenIcon/>
      </button>
    </header>
    <div className= 'about-app'>
    <h1>
      welcome to our site 
      </h1>
    </div>
   </>
   

  )
}

export default NavBar
