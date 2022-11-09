import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import FlowerAndCakeItems from "../../pages/FlowerAndCakeItems/FlowerAndCakeItems";
import AboutUs from "../../pages/Home/AboutUs/AboutUs";
import Home from "../../pages/Home/home/Home";
import ProductsQuality from "../../pages/Home/ProductsAbout/ProductsQuality";
import Login from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import SignUp from "../../pages/SignUp/SignUp";
import PrivatesRoutes from "../PrivateRoute/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/productQuality", element: <ProductsQuality /> },
      { path: "/flowerAndCakeItems", element: <FlowerAndCakeItems /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        path: "/profile",
        element: (
          <PrivatesRoutes>
            <Profile />
          </PrivatesRoutes>
        ),
      },
    ],
  },
]);
export default router;
