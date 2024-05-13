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




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: () => fetch('https://hut-fruit-carving-server-side.vercel.app/crafts')
        },
        {
          path: "/addCraft",
          element: <AddCraft></AddCraft>
        },
        {
          path: "/allArtCraft",
          element: <AllArtCraft/>,
          loader: () => fetch('https://hut-fruit-carving-server-side.vercel.app/crafts')
        },
        {
          path: "/detailsCraft/:id",
          element: <PrivateRoute>
            <DetailsCraft/>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://hut-fruit-carving-server-side.vercel.app/crafts/${params.id}`)
        },
        {
          path: "/updateCraft/:id",
          element: <UpdateCraft/>,
          loader: ({params}) => fetch(`https://hut-fruit-carving-server-side.vercel.app/crafts/${params.id}`)
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