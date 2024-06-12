import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container ms-2 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center ali">
          <div className="flex flex-col items-start gap-4">
            <Link href="#" className="flex items-center gap-2">
              <span className="text-lg font-semibold">Direct Tasks</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400">
              Streamline your workflow and boost productivity with our powerful
              task management platform.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <h4 className="text-sm font-semibold">Product</h4>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Integrations
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="text-sm font-semibold">Company</h4>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Careers
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="text-sm font-semibold">Legal</h4>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 justify-center">
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-2-.82A4.52 4.52 0 0 0 16 2c-2.66 0-4.81 2.12-4.81 4.73 0 .37.04.73.1 1.08C7.69 7.6 4.1 5.8 1.67 3.14A4.75 4.75 0 0 0 .88 5.3 4.58 4.58 0 0 0 2 9.62 4.42 4.42 0 0 1 1 8.6v.06a4.64 4.64 0 0 0 3.6 4.5 4.42 4.42 0 0 1-2.18.08 4.67 4.67 0 0 0 4.29 3.2 9 9 0 0 1-6.56 1.8A12.94 12.94 0 0 0 7.29 20c8.38 0 12.96-6.66 12.96-12.44v-.53A8.93 8.93 0 0 0 23 3z" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Facebook">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook"
                  >
                    <path d="M18 2h-3.3a4.7 4.7 0 0 0-4.7 4.7v3.3H6v4h4v10h4V14h3.3l.7-4H14V6.7c0-.9.7-1.7 1.7-1.7H18V2z" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Instagram">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
