import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './home/views/Home.jsx';
import Users from './users/views/Users.jsx';
import Posts from './posts/views/Posts.jsx';

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
]);

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App;
