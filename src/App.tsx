import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Work from "./pages/Work";
import Posts from "./pages/Posts";
import NextVSApollo from "./pages/posts/NextVSApollo";
import LearnNext from "./pages/posts/LearnNext";

const router = createHashRouter([
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
    path: "/posts/next-vs-apollo",
    element: <NextVSApollo />,
  },
  {
    path: "/posts/learn-next-5days",
    element: <LearnNext />,
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
