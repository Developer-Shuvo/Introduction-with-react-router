import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-center gap-4 text-lg font-semibold text-gray-600">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Posts">Posts</Link> {/* ✅ Added */}
      </nav>
    </div>
  );
};

export default Header;
