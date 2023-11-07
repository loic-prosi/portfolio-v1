import { Link, NavLink } from "react-router-dom";
import Icon from "../Icon";

const Navbar = (): React.ReactElement => {
  return (
    <nav className="navbar">
      <Link className="navbar__title-link" to="/">
        <Icon name="logo" size="45px" alt="Loïc Prosi" />
        <h1 className="navbar__title">Loïc Prosi</h1>
      </Link>
      <ul className="navbar__links">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            to="/projects"
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
            to="/about"
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
