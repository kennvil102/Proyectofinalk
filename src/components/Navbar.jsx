import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="banner"></div>
      <div className="Posicion">
        <ul className="moverlins">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/AboutUs">AboutUs</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
