import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-600 drop-shadow-md sticky top-0 text-white">
      <ul className="flex flex-wrap items-center justify-around p-4 text-lg font-bold">
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/episode">Episode</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
