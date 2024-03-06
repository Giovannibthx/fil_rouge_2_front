import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nav from './nav/views/Nav.jsx';
import Home from './home/views/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {

  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
