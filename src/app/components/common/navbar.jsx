import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { MAIN_ROUTE, FAVORITES_ROUTE } from "../../utils/constants";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-md bg-light border-bottom">
      <div className="container-fluid">
        <Link to={MAIN_ROUTE} className="navbar-brand mb-0 h1 px-2">
          <i className="bi bi-people-fill me-2 text-warning" />
          TEAM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* collapse block */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : "hide"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={MAIN_ROUTE} className="nav-link">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to={FAVORITES_ROUTE} className="nav-link">
                Избранное
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
