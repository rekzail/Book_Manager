// Aside.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <aside className='bg-white sidebar p-2'>
      <div className='mt-3'>
        <i className="bi bi-person my-2 mx-2"></i>
        <span className='brand-name fs-5'>Hola <b>Zail</b></span>
      </div>
      <hr className='text-dark' />
      <div className="list-group list-group-flush">
        <Link to="/dashboard" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-speedometer2 mx-2'></i>
          <span className='fs-5'>Dashboard</span>
        </Link>
        <Link to="/" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-house mx-2'></i>
          <span className='fs-5'>Inicio</span>
        </Link>
        <Link to="/book" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-book mx-2'></i>
          <span className='fs-5'>Libros</span>
        </Link>
        <Link to="/profile" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-person mx-2'></i>
          <span className='fs-5'>Perfil</span>
        </Link>
        <Link to="/settings" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-gear mx-2'></i>
          <span className='fs-5'>Configuracion</span>
        </Link>
        <Link to="/logout" className='list-group-item list-group-item-action py-2'>
          <i className='bi bi-box-arrow-right mx-2'></i>
          <span className='fs-5'>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
