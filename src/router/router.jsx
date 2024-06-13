import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import WhoCanUse from "../pages/WhoCanUse";
import Login from "../pages/logInfo/Login";
import Register from "../pages/logInfo/Register";
import ReportSection from "../pages/ReportSection";
import DashboardLayout from "../layout/dashboard/DashboardLayout";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element : <Home/>
      },
      {
        path:'who-can-use',
        element: <WhoCanUse/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'register',
        element: <Register/>
      },
      {
        path:'report',
        element: <ReportSection/>
      }
    ]
  },
  {
    path:'dashboard',
    element: <DashboardLayout/>
  }
])