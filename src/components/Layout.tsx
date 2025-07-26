import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
