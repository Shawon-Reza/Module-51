import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Component/Root.jsx';
import Home from './assets/Component/Home.jsx';
import Login from './assets/Component/Login.jsx';
import Resister from './assets/Component/Resister.jsx';
import AuthProvider from './assets/Component/AuthProvider/AuthProvider.jsx';
import Orders from './assets/Component/Orders.jsx';
import PrivetRoutes from './assets/Component/Routes/PrivetRoutes.jsx';
import Profile from './assets/Component/Profile .jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: 'login',
        element: <Login></Login>
      }
      ,
      {
        path: 'register',
        element: <Resister></Resister>
      },
      {
        path: 'orders',
        element: <PrivetRoutes><Orders></Orders></PrivetRoutes>
      }
      ,
      {
        path: 'profile',
        element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
