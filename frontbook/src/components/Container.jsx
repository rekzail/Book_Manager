import React from 'react'

export default function Container() {
  return (
    
    <div className='container mt-5'>
      
        <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 text-justify px-3">
          <h1 className='titulo'>Encuentras la libertad que tu imaginación desea.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus, 
            sunt placeat alias maiores voluptates modi quisquam dolor ea natus itaque iure 
            molestias veniam cum voluptatibus nobis accusantium dolorem nemo?
            <i className="bi bi-heart"></i>
            </p>
        </div>
        <div className="col-md-6 text-center px-3">
        <img src={process.env.PUBLIC_URL + '/image/cover.png'} alt="Chica leyendo" className="img-fluid mx-auto d-block"/>
        </div>
      </div>
    </div>
    
    
  )
}
