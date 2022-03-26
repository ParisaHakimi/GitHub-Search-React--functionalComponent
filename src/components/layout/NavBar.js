import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
      <div class="container-fluid navi">
        <div className="logo">
          <a
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <i className="fab fa-github me-2"></i>
            <div>GitHub Finder</div>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-auto" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item menu">
              <a class="nav-link menu-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item menu">
              <a class="nav-link menu-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
