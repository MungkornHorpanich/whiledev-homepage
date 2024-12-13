import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Work from "./pages/Work";
import Posts from "./pages/Posts";
import ReactTutorial from "./pages/posts/ReactTutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/react-tutorial",
    element: <ReactTutorial />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
