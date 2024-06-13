import { FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const SingleTask = ({ task, handleupdate }) => {
  const { _id, priority, title, description, deadline } = task;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleupdate(_id);
        toast.success('Task deleted successfully!');
      } else {
        console.error('Failed to delete task');
        toast.error('Failed to delete task.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while deleting the task.');
    }
  };

  return (
    <div className="mt-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-10">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Priority: {priority}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Title: {title}
            </h2>
            <p className="mt-2 text-gray-500">Description: {description}</p>
            <div className="mt-4">
              <span className="text-gray-600">Deadline: {deadline}</span>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                // onClick={() => onEdit(task.id)}
                className="flex items-center justify-center bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                <FaEdit className="mr-2" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center justify-center bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                <FaTrash className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleTask.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  handleupdate: PropTypes.func.isRequired,
};

export default SingleTask;
