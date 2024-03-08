// Navbar.js

import React, { useState } from "react";
import logo from "../../assets/News_4-removebg-preview.png";
import "./nav.css";

const Navbar = ({ CATEGORY, handleChange, category, loading }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="auto" height="100px" id="news_logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-100 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
              {CATEGORY.map((cat, index) => {
                return (
                  <li className="nav-item">
                    <button
                      key={index}
                      type="button"
                      className={
                        category === cat ? "black button-17" : "white button-17"
                      }
                      onClick={() => {
                        handleChange(cat);
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {loading ? (
        <>
          <div className="text-center">
            <div className="spinner-border" role="status"></div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
