import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';

export const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    // onSubmit(data);
    console.log(data);
    reset();
  };

  return <div>
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white p-6 shadow rounded mb-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Task title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          {...register('description')}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Task description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Deadline</label>
        <input
          type="date"
          {...register('deadline')}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Priority</label>
        <select
          {...register('priority')}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
      >
        <AiOutlinePlus className="mr-2" />
        Add Task
      </button>
    </form>
  </div>;
};
