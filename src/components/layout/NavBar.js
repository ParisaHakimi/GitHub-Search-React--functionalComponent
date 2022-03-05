import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-danger text-white navbar navbar-expand-sm">
      <div className="container-fluid">
        <div className="logo">
          <a
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <i className="fab fa-github me-2"></i>
            <div>GitHub Finder</div>
          </a>
        </div>
        <div className="collapse navbar-collapse me-auto">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item menu">
              <a href="/" className="nav-link  menu-link">
                Home
              </a>
            </li>
            <li className="nav-item menu">
              <a href="/about" className="nav-link  menu-link">
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
