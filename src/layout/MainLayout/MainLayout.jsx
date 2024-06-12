import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;