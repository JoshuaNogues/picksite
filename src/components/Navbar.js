import React from 'react'
import { Link } from "react-scroll";
import logo from '../images/logo.png'

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link className='navbar-link' to='/'><img className='logo' src={logo} alt='logo'/></Link>
        <Link className='navbar-link' to="plans" smooth={true} duration={500}>Subscriptions</Link>
        <Link className='navbar-link' to="about" smooth={true} duration={500}>About</Link>
        <a className='navbar-link' href="sms:+13053162533">Contact Us</a>
      </nav>
    );
  }
export default Navbar