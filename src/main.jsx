import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
      <ToastContainer/>
    </AuthProvider>
  </React.StrictMode>
);
