import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/contact"> Contato</Link>
        </li>
        <li>
          <Link to="/"> Main Page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
