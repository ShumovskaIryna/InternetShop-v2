import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getTotalQty from '../helpers/NavbarHelper';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [shouldShowMenu, toggleMenu] = useState(false);
  let navbar = document.getElementById('navbarSupportedContent');
  if (shouldShowMenu) {
    navbar?.classList.add('show');
  }
  if (!shouldShowMenu) {
    navbar?.classList.remove('show');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-white py-2 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <img src="RedPanda.png" className="logo" alt="RedPandaLogo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              toggleMenu((current) => !current);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">
                    <i className="fa fa-sign-in me-1"></i>Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <i className="fa fa-user-plus me-1"></i>Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="fa fa-shopping-cart me-1"></i>Cart({getTotalQty(state)})
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
