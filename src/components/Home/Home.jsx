import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center text-3xl font-bold my-4">Welcome to Home</h1>
      <Outlet /> {/* ✅ Renders child routes like About, Users, etc. */}
    </div>
  );
};

export default Home;
