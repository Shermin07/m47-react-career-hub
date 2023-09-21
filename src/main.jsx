import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Home/Home';
import ErrorPage from './Header/AppliedJobs/ErrorPage/ErrorPage';
import AppliedJobs from './Header/AppliedJobs/AppliedJobs';
import Statistics from './Statistics/Statistics';
import Blogs from '../Blogs/Blogs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/Home',
        element:<Home></Home>
      },
      {
        path:'/AppliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
