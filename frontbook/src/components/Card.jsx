import React from "react";

export default function Card({ image, title, description }) {
  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
     
      <img src={`${process.env.PUBLIC_URL} ${image}`} alt="Chica leyendo" className="img-fluid mx-auto d-block"/>
        
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href="#" className="btn btn-primary">
          Ver mas
        </a>
      </div>
    </div>
  );
}
