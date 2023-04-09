import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            
            <Link to="/Home">Home</Link>
            <Link to="/Orders">Orders</Link>
            <Link to="/About">About</Link>
            <Link to="/Checkout">Checkout</Link>
            <Link to="/Grandpa">Grandpa</Link>
            
            
        </nav>
    );
};

export default Header;