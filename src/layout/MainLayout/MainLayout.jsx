import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

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
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default MainLayout;