import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top text-white">
  <div className="container-fluid ">
      
        <a className="navbar-brand text-white mx-3" to="/">Wizabook</a>

  </div>
  <div className="collapse navbar-collapse mx-4">
          <ul className="navbar-nav">
            
            <li className="nav-item  mx-1">
              <Link className="nav-link text-white" to="/about">
               <i class="bi bi-book"></i>
              </Link>
            </li>
            <li className="nav-item mx-1 ">
              <Link className="nav-link text-white" to="/dashboard">
              <i class="bi bi-search"></i>
              </Link>
            </li>
            <li className="nav-item mx-1 ">
              <Link className="nav-link text-white" to="/dashboard">
                <i className="fa fa-envelope">Login</i>
              </Link>
            </li>
          </ul>
        
          
  </div>
</nav>

  )
}
