import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="border-2 border-dotted border-blue-600 rounded mt-10 bg-yellow-400">
        <h1 className="text-2xl font-bold underline  py-8 ">
          This is Home page
        </h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
