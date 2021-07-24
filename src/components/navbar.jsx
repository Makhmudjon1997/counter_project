import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
    return (
        <nav className = 'navbar navbar-light bg-light'>
            <a href="#" className = 'navbar-brand'>
                Navbar <span className = "btn btn-success">{totalCounters}</span>
            </a>
        </nav>
        
    );
};

export default Navbar;
