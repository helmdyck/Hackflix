import React from "react";

function Footer() {
  return (
    <>
      <div className="container fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/search" className="nav-link px-2 text-light">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a href="/sobre-nosotros" className="nav-link px-2 text-light">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contacto" className="nav-link px-2 text-light">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
