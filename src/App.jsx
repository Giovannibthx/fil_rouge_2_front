import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './home/views/Home.jsx';
import Users from './users/views/Users.jsx';
import Posts from './posts/views/Posts.jsx';
import Register from './auth/views/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App;
