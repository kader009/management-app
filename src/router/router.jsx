import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home';
import WhoCanUse from '../pages/WhoCanUse';
import Login from '../pages/logInfo/Login';
import Register from '../pages/logInfo/Register';
import ReportSection from '../pages/ReportSection';
import DashboardLayout from '../layout/dashboard/DashboardLayout';
import DashboardHome from '../layout/dashboard/DashboardHome';
import ErrorPage from '../pages/ErrorPage';
import TaskList from '../components/task/TaskList';
import { CreateTask } from '../components/task/CreateTask';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'who-can-use',
        element: <WhoCanUse />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'report',
        element: <ReportSection />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
      {
        path: 'task',
        element: <TaskList />,
      },
      {
        path: 'create-task',
        element: <CreateTask />,
      },
    ],
  },
]);
