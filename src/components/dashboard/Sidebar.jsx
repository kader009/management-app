import { useState } from 'react';
import { LuBox, LuUser, LuCalendar } from 'react-icons/lu';
import { FaSuitcase, FaTasks, FaCreativeCommons } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/');
  };

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: '', name: 'Dashboard', icon: LuBox },
    {
      id: 2,
      path: 'create-task',
      name: 'Create Task',
      icon: FaCreativeCommons,
    },
    { id: 3, path: 'task', name: 'To Do List', icon: FaTasks },
    { id: 4, path: '/projects', name: 'Projects', icon: FaSuitcase },
    { id: 5, path: '/clients', name: 'Clients', icon: LuUser },
    { id: 6, path: '/work', name: 'Work Plan', icon: LuCalendar },
  ];
  return (
    <div className="w-16 md:w-48 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white">
      <div className="mb-8">
        <Link to={'/'}>
          <img
            src="/icons8-microsoft-to-do-app-48.png"
            alt="logo"
            className="w-8 hidden md:flex"
          />
        </Link>
        <Link to={'/'}>
          <img
            src="/icons8-microsoft-to-do-app-48.png"
            alt="logo"
            className="w-8 flex md:hidden"
          />
        </Link>
      </div>

      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? 'bg-indigo-100 text-indigo-500' : ''
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center mt-3">
        <button
          onClick={handleLogout}
          className="bg-indigo-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
