import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] dark:from-[#4338CA] dark:to-[#7C3AED]">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Unlock Your Potential with Our Platform
            </h1>
            <p className="text-lg text-gray-200">
              Discover how our cutting-edge tools and features can help you
              achieve your goals and take your tasks to new heights.
            </p>
            <Link
              to={''}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#6366F1] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1] dark:bg-gray-950 dark:text-[#8B5CF6] dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:focus:ring-offset-[#4338CA]"
            >
              Let’s Explore
              <span className="ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
