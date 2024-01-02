// Dashboard.jsx
import React from "react";
import Aside from "../Aside";
import { Routes, Route } from "react-router-dom";

// components

import Board from "../Board";

export default function Dashboard({name}) {
  return (
    <div className="mt-5 container-fluid">
      <div className="row mb-5">
        <div className="col-2 vh-100">
          <Aside name={name}/>
        </div>
        <div className="col-8 vh-100 my-5">
          <div className="container justify-content-center">
            <div className="row">
              <h2>Dashboard V1</h2>
              <Routes>
                <Route path="/" element={<Board />} />
                
                
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
