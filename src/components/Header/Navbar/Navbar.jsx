import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav__body">
                    <h2 className="nav__logo logo">
                        Thrivetalk
                    </h2>
                    <ul className='nav__menu'>
                        <li className='menu__item'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='menu__item'>
                            <a href="#about">About</a>
                        </li>
                        <li className='menu__item'>
                            <a href="#services">Services</a>
                        </li>
                        <li className='menu__item'>
                            <a href="#blog">Blog</a>
                        </li>
                    </ul>
                    <button className='nav__button'>CONTACT US</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar