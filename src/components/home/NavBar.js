/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <section className='navbar-brand'>FinTrack</section>
            <section className='navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>   
                        <Link to='/expense' className='nav-link'>Expenses</Link>
                    </li>
                    <li className='nav-item'>   
                        <Link to='/pro' className='nav-link-pro'>Pro</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                </ul>
            </section>
        </div>
    </nav>
  );
}

export default NavBar;
