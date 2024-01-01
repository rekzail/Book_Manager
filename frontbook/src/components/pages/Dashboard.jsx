import React from "react";
import Aside from "../Aside";
import { Routes, Route } from "react-router-dom";

// components
import Container from "../Container";
import Book from "../Book";
import Board from "../Board";

export default function Dashboard() {
  return (
    <div className="mt-5 container-fluid">
      <div className="row mb-5">
        <div className="col-2 vh-100">
          <Aside></Aside>
        </div>
        <div className="col-8 vh-100 my-5 ">
          <div className="container justify-content-center">
            <div className="row">
              <h2>Dashboard V1</h2>
              <Routes>
                <Route path="/" element={<Board></Board>}></Route>
                <Route path="/book" element={<Book/>}></Route>
                <Route path="config" element={<Book></Book>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
