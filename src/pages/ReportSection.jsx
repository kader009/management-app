const ReportSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Task Report
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Completed Tasks
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-2xl font-bold text-green-500">20</div>
                <div className="ml-2 flex items-center text-sm font-semibold text-green-500">
                  <svg
                    className="h-5 w-5 mr-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  30% from last week
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Pending Tasks
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-500">5</div>
                <div className="ml-2 flex items-center text-sm font-semibold text-blue-500">
                  <svg
                    className="h-5 w-5 mr-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  20% from last week
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Overdue Tasks
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-2xl font-bold text-red-500">3</div>
                <div className="ml-2 flex items-center text-sm font-semibold text-red-500">
                  <svg
                    className="h-5 w-5 mr-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  50% from last week
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Tasks by Priority
              </h3>
              <div className="mt-2">
                <ul className="divide-y divide-gray-200">
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        High Priority
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-red-500">
                      10 tasks
                    </span>
                  </li>
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Medium Priority
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-yellow-500">
                      8 tasks
                    </span>
                  </li>
                  <li className="py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Low Priority
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-500">
                      7 tasks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
