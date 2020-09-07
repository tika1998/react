import React from 'react';
import { Link } from 'react-router-dom';

 const Navbar = () => {
    return (
        <nav className='nav'>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/menu">Menu</Link>
        </div>
      </nav>
    )
}

export default Navbar;