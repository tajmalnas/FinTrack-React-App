/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <section className='navbar-brand'>FinTrack</section>
            <section className='navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>   
                        <a href='#' className='nav-link'>Expenses</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>About</a>
                    </li>
                </ul>
            </section>
        </div>
    </nav>
  );
}

export default NavBar;
