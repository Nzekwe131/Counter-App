import React,{useRef} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import './Nav.css'

const NavBar = () => {
  const NavRef = useRef()

  const shownavlink =()=>{
    NavRef.current.classList.toggle('responsive-nav')
  }

  return (
    <header className= 'header'>
      <h2>Counter</h2>
   
      <nav ref={NavRef} >
      <Link to='counter'>Counter</Link>
      <Link to='/errorpage'>Errropage</Link>
      <Link to='error'>Errorboundary</Link>
     
    <button
    className='nav-btn nav-close'
     onClick={shownavlink}>
        <FaTimes/>
    </button>
      </nav>
      <button
      className='nav-btn'
       onClick={shownavlink}>
      <FaBars/>
      </button>
     
    </header>
  )
}

export default NavBar
