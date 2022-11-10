import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import AddFlowerAndCakeItem from "../../pages/FlowerAndCakeItems/AddFlowerAndCakeItem";
import FlowerAndCakeItems from "../../pages/FlowerAndCakeItems/FlowerAndCakeItems";
import SingleFlowerAndCakeItem from "../../pages/FlowerAndCakeItems/SingleFlowerAndCakeItem";
import AboutUs from "../../pages/Home/AboutUs/AboutUs";
import Home from "../../pages/Home/home/Home";
import ProductsQuality from "../../pages/Home/ProductsAbout/ProductsQuality";
import Login from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import Review from "../../pages/Review/Review";
import UpdateReview from "../../pages/Review/UpdateReview";
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

      {
        path: "/flowerAndCakeItems",
        loader: async () => fetch("http://localhost:5000/flowerAndCakeItems"),
        element: <FlowerAndCakeItems />,
      },

      { path: "/flowerAndCakeItem/:id", element: <SingleFlowerAndCakeItem /> },
      {
        path: "/addFlowerAndCakeItem",
        element: (
          <PrivatesRoutes>
            <AddFlowerAndCakeItem />
          </PrivatesRoutes>
        ),
      },

      {
        path: "/review",
        element: (
          <PrivatesRoutes>
            <Review />
          </PrivatesRoutes>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: async ({ params }) =>
          fetch(` http://localhost:5000/reviewOne/${params.id}`),
        element: (
          <PrivatesRoutes>
            <UpdateReview />
          </PrivatesRoutes>
        ),
      },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/productQuality", element: <ProductsQuality /> },
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
