import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center gap-4 text-lg font-semibold text-gray-600">
        <NavLink className="hover:text-black" to="/">
          Home
        </NavLink>
        <NavLink className="hover:text-black" to="/About">
          About
        </NavLink>
        <NavLink className="hover:text-black" to="/Users">
          {" "}
          Users
        </NavLink>

        <NavLink className="hover:text-black" to="/Contact">
          {" "}
          Contact
        </NavLink>

        <NavLink className="hover:text-black" to="/Posts">
          {" "}
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
