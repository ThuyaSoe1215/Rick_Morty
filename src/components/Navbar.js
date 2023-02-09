import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-sky-900 text-white">
      <ul className="flex flex-wrap items-center justify-around p-4 text-lg font-bold">
        <li>
          <Link to="/character">Characters</Link>
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
