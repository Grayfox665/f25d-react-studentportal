import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">Studentportalen</Link>
      <div onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/courses">Kurser</NavLink>
        </li>

        <li>
          <NavLink to="/news">Nyheter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
