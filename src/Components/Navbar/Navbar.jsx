import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fresh Cart
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="categories">
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="brand">
                  Brands
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  Cart
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item d-flex align-items-center">
                <i className=" fab mx-2 fa-facebook "></i>
                <i className=" fab mx-2 fa-twitter "></i>
                <i className=" fab mx-2 fa-instagram "></i>
                <i className=" fab mx-2 fa-tiktok "></i>
                <i className=" fab mx-2 fa-linkedin "></i>
                <i className=" fab mx-2 fa-youtube "></i>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
