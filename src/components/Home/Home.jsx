import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-sky-200 rounded p-4">
        <Header />
      </div>

      <div className="bg-red-100 mt-4">
        <h1 className=" p-4 flex justify-center items-center text-3xl font-bold ">
          Welcome to Home
        </h1>
        <Outlet /> {/* ✅ Renders child routes like About, Users, etc. */}
      </div>
    </div>
  );
};

export default Home;
