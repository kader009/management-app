import { useState } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const SingleTask = ({ task, handleupdate }) => {
  const { _id, priority, title, description, deadline } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://management-app-backend-1.onrender.com/tasks/${_id}`,
        {
          method: 'DELETE',
        }
      );

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  const saveEdit = async () => {
    try {
      const response = await fetch(`https://management-app-backend-1.onrender.com/tasks/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editTask),
      });

      if (response.ok) {
        const updatedTask = await response.json();
        setEditTask(updatedTask);
        setIsEditing(false);
        handleupdate(editTask);
        toast.success('Task updated successfully!');
      } else {
        console.error('Failed to update task');
        toast.error('Failed to update task.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while updating the task.');
    }
  };

  return (
    <div className="mt-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-10">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-gray-700">Title:</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="title"
                    value={editTask.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Priority:</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="priority"
                    value={editTask.priority}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Description:</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    name="description"
                    value={editTask.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Deadline:</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="deadline"
                    type="date"
                    value={editTask.deadline}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="mt-4 flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded hover:bg-green-700"
                  onClick={saveEdit}
                >
                  <FaSave className="mr-2" />
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Priority: {priority}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                  Title: {title}
                </h2>
                <p className="mt-2 text-gray-500">Description: {description}</p>
                <div className="mt-4">
                  <span className="text-gray-600">Deadline: {deadline}</span>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button
                    className="flex items-center justify-center bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-600"
                    onClick={() => setIsEditing(true)}
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleTask.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  handleupdate: PropTypes.func.isRequired,
};

export default SingleTask;
