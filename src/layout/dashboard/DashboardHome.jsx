import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Overview */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-shrink-0">
              <img
                className="w-32 h-32 rounded-full sm:w-40 sm:h-40"
                src={user?.photoURL || '/default-profile.png'}
                alt="Profile"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl leading-6 font-medium text-gray-900">
                  {user?.name}
                </h2>
                <p className="text-lg leading-5 text-gray-700">
                  {user?.role || 'User'}
                </p>
                <p className="text-sm leading-5 text-gray-600 mt-2">
                  {user?.email}
                </p>
              </div>
              <div className="mt-4 flex justify-center sm:justify-start">
                <button className="px-4 py-2 border border-gray-300 shadow-sm text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                📄
              </span>
              <p className="ml-4 text-sm leading-5 text-gray-600">
                Completed a task: Design new UI
              </p>
            </li>
            <li className="flex items-start">
              <span className="h-8 w-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                📬
              </span>
              <p className="ml-4 text-sm leading-5 text-gray-600">
                Received a new message from: John
              </p>
            </li>
            <li className="flex items-start">
              <span className="h-8 w-8 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                💬
              </span>
              <p className="ml-4 text-sm leading-5 text-gray-600">
                Commented on the post: Team Update
              </p>
            </li>
          </ul>
        </div>

        {/* User Statistics */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            User Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800">
                Tasks Completed
              </h4>
              <p className="text-2xl font-bold text-blue-600">
                {user?.tasksCompleted || 0}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800">Messages</h4>
              <p className="text-2xl font-bold text-green-600">
                {user?.messages || 0}
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800">Projects</h4>
              <p className="text-2xl font-bold text-yellow-600">
                {user?.projects || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Settings</h3>
          <div className="space-y-4">
            <button className="px-4 py-2 w-full border border-gray-300 shadow-sm text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
              Account Settings
            </button>
            <button className="px-4 py-2 w-full border border-gray-300 shadow-sm text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
              Privacy Settings
            </button>
            <button className="px-4 py-2 w-full border border-gray-300 shadow-sm text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
              Notification Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
