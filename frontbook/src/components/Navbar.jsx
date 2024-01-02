import React from 'react'
import { Link } from 'react-router-dom';


import FormLogin from './FormLogin';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top text-white">
  <div className="container-fluid ">
      
        <Link className="navbar-brand text-white mx-3 titulo-2" to="/">Wizabook</Link>

  </div>
  <div className="collapse navbar-collapse mx-4">
          <ul className="navbar-nav">
            
            <li className="nav-item  mx-1">
              <Link className="nav-link text-white" to="/dashboard">
               <i class="bi bi-book"></i>
              </Link>
            </li>
            <li className="nav-item mx-1 ">
              <Link className="nav-link text-white" to="/search">
              <i class="bi bi-search"></i>
              </Link>
            </li>
            <li className="nav-item mx-2 ">
              
              <FormLogin></FormLogin>
            </li>
          </ul>
        
          
  </div>
</nav>

  )
}
