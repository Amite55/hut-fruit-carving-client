import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingIn from "../Pages/SingIn/SingIn";
import SignUp from "../Pages/SingUp/SignUp";
import AddCraft from "../Pages/AddCraft/AddCraft";
import AllArtCraft from "../Pages/AllArtCrafts/AllArtCraft";
import DetailsCraft from "../Pages/DetailsCraft/DetailsCraft";
import UpdateCraft from "../Pages/UpdateCraft/UpdateCraft";
import PrivateRoute from "./PrivateRoute";
import MyArtCraft from "../Pages/MyArtCraft/MyArtCraft";
import AllArtCraftsPage from "../Pages/AllArtCraftsPage/AllArtCraftsPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/addCraft",
          element: <AddCraft></AddCraft>
        },
        {
          path: "/allArtCraft",
          element: <AllArtCraft/>
        },
        {
          path: '/all-art-crafts/:subcategoryName',
          element: <AllArtCraftsPage/>
        },
        {
          path: "/detailsCraft/:id",
          element: <PrivateRoute>
                     <DetailsCraft/>
                   </PrivateRoute>,
        },
        {
          path: "/updateCraft/:id",
          element: <UpdateCraft/>,
        },
        {
          path: "/myArt",
          element: <MyArtCraft/>
        },
        {
          path: "/signIn",
          element: <SingIn/>
        },
        {
          path: "/signUp",
          element: <SignUp/>
        }
      ],
    },

  ]);

  export default router;