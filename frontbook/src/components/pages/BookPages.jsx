// Dashboard.jsx
import React from "react";
import Aside from "../Aside";


// components

import Book from "../Book";


export default function BookPages({name}) {
  return (
    <div className="mt-5  container-fluid">
      <div className="row mb-5">
        <div className="col-2 vh-100">
          <Aside name= {name}/>
        </div>
        <div className="col-8 vh-100 mt-5">
          <div className="container">
            <div className="row">
                <div className="col">
                    <Book />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
