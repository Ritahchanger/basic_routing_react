import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className='logo'>
                    <p>
                        <Link to="/">SYSTEM</Link>
                    </p>
                </div>
                <div className='menu_list'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
               
            </nav>
        </div>
    );
}

export default Navbar;
