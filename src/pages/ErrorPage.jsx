import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-6">
          Something went wrong. The page you are looking for cannot be found.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
