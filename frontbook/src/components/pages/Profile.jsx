// Dashboard.jsx
import React from "react";

// components
import User from "../User";
import Aside from "../Aside";


export default function Profile() {
  return (
    <div className="mt-5  container-fluid">
      <div className="row mb-5">
        <div className="col-2 vh-100">
          <Aside />
        </div>
        <div className="col-8 vh-100 mt-5">
          <div className="container">
            <div className="row">
                <div className="col">
                  <User />  
                </div>
             
              
               
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
