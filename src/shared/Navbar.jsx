import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] dark:from-[#4338CA] dark:to-[#7C3AED] text-gray-50 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
          <Link href="#" className="text-xl font-bold">
            Task Manager
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:text-gray-300">
              Tasks
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Calendar
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Reports
            </Link>
          </nav>
          <button
            className="flex items-center space-x-2 rounded-md bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] dark:from-[#4338CA] dark:to-[#7C3AED] px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <span>Menu</span>
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="absolute inset-x-0 top-16 z-10 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] dark:from-[#4338CA] dark:to-[#7C3AED] text-gray-50 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-gray-300">
              Tasks
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Calendar
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Reports
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
