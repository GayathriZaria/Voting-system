import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import {FaBars,FaTimes} from 'react-icons/fa'
import '../Styles/Navbar.css';

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
  return (
    <header>
        <Link to='/'>
          <img src={require('../pages/images/logo.png')} alt='logo' className='LogoImg'/>
        </Link>
        <nav className="Nav" ref={navRef}>
            <Link to='/' className='NavLink'>
                Home
            </Link>
            <Link to='/Analysis'  className='NavLink'>
                Analysis
            </Link>
            <Link to='/VotingPage' className='NavLink'>
                VotingPage
            </Link>
            <Link to='/Manifesto' className='NavLink'>
                Manifesto
            </Link>
            <Link to='/AboutUs' className='NavLink'>
                AboutUs
            </Link>
            <Button className='nav-btn nav-close-btn'  onClick={showNavbar}>
                <FaTimes/>
            </Button>
        </nav>
        <Button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars/>
        </Button>
        </header>
  )
}

export default Navbar