import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingIn from "../Pages/SingIn/SingIn";
import SignUp from "../Pages/SingUp/SignUp";
import AddCraft from "../Pages/AddCraft/AddCraft";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/addCraft",
          element: <AddCraft></AddCraft>
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