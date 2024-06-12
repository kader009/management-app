import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element : <Home/>
      }
    ]
  }
])