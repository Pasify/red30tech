import { Link, NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

export default function Header() {
  const getActive = ({ isActive }) => (isActive ? "nav-active" : null);
  return (
    <header className="container">
      <img
        src={logo}
        alt="Red30 Tech Logo"
        title="Red 30 Tech | Home "
        className="logo"
      />
      <nav>
        <NavLink className={getActive} to="/">
          Home
        </NavLink>
        <NavLink className={getActive} to="/categories">
          Categories
        </NavLink>
        <NavLink className={getActive} to="/about">
          About
        </NavLink>
        <NavLink className={getActive} to="/register">
          Register
        </NavLink>
      </nav>
    </header>
  );
}
