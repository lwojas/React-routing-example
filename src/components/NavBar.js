import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About this website</NavLink>
    </nav>
  );
};

export default NavBar;
