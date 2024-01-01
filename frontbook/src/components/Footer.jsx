import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-center text-white" >
 
     

 
  <div className="text-center p-3">
    © 2023 Copyright: 
    <Link className="text-white titulo-2" to={"/"}> Wizabook</Link>
  </div>

</footer>

  )
}
