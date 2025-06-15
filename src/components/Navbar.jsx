import { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          className="vanbar-brand"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Studentportalen
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Kurser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/news">
                Nyheter
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
