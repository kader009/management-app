import { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://management-app-backend-1.onrender.com/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const handleupdate = (id) => {
    setTasks(tasks.filter((product) => product._id !== id));
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-center">To Do List</h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {tasks.map((task) => (
          <SingleTask key={task._id} task={task} handleupdate={handleupdate} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
