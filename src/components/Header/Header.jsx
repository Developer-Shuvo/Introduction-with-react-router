import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind</h1>

      <nav className="flex justify-center gap-4 text-lg font-semibold text-gray-600">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users">Users</Link>
        
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
