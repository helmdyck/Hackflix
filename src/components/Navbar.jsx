import { useState } from "react";
import logohf from "../assets/logohf.png";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profilepic from "../assets/profilepic.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? "navbar navbar-dark background-dark shadow-lg fixed-top py-3"
          : "navbar navbar-dark fixed-top py-3"
      }
    >
      <div className="container-fluid">
        <div className="d-flex flex-row align-items-center">
          <img
            src={profilepic}
            className="profile-pic dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            alt=""
          />
          <div className="dropdown" data-bs-theme="dark">
            <ul className="dropdown-menu mt-4">
              <li>
                <button
                  className="dropdown-item "
                  type="button"
                  onClick={() => navigate("/mylist")}
                >
                  My List
                </button>
              </li>
              <li>
                <button className="dropdown-item " type="button">
                  Switch Profiles
                </button>
              </li>
              <li>
                <button className="dropdown-item " type="button">
                  Settings
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item " type="button">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>

          <p className="profile-name">Helmuth</p>
        </div>

        <div className="logo-div">
          <a className="navbar-brand" href="/">
            <img className="logo-hackflix" src={logohf} alt="" />
          </a>
        </div>
        <div className="search-menu-div d-flex flex-row align-items-center justify-content-center">
          <i
            className="bi bi-search search-icon"
            onClick={() => navigate("/search")}
          ></i>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end text-bg-dark fs-5 text"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <img className="logo-hackflix" src={logohf} alt="" />
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link">
                  Series
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link">
                  Trending Now
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="" className="nav-link">
                  Last Chance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
