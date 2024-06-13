import { Outlet } from 'react-router-dom';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';

const DashboardLayout = () => {
  return (
    <div className='h-screen'>
      <div>
        <Sidebar />
      </div>

      <div>
        <Header />
      </div>
      <div className=" ml-16 md:ml-56">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
