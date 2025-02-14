import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
