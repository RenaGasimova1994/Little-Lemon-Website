import React from 'react';
import "./Header.css"
import Logo from "../assets/images/Logo.svg"
import { Link } from 'react-router-dom';

export default function MyHeader() {
  return (
    <>
      <div className="header d-flex p-4">
        <img
          className="logo ps-5"
          src={Logo} 
          alt="Logo"
        />
        <nav>
          <ul className="d-flex nav">
            <li><Link to="/" >Home</Link></li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
