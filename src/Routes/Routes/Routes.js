import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import FlowerAndCakeItems from "../../pages/FlowerAndCakeItems/FlowerAndCakeItems";
import Home from "../../pages/Home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/flowerAndCakeItems", element: <FlowerAndCakeItems /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
export default router;
