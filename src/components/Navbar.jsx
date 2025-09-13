import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white by3 shadow-sm fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA Collection
          </NavLink>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>

            <div className="buttons me-3">
              <NavLink
                to="/cart"
                className="btn btn-outline-dark position-relative d-flex align-items-center"
              >
                <i className="fa fa-shopping-cart me-2 fs-5"></i>
                <span className="fw-semibold">Cart</span>
                {cart.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem", padding: "4px 6px" }}
                  >
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </div>

            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
