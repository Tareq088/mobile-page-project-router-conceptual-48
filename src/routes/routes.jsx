import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home"
import MainLayOut from "../Layouts/MainLayOut";
import Favorites from './../Pages/Favorites';
import About from './../Pages/About';
import PhoneDetails from './../Pages/PhoneDetails';
import ErrorPage from './../Pages/ErrorPage';


export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayOut,
      errorElement: ErrorPage,
      children:[
        {
            path:"/",
            element: <Home/>,
            // Component: Home
            hydrateFallbackElement: <p>Loading. wait coming...</p>,
            loader: ()=> fetch("phones.json")
        },
        {
          path:'/favorites',
          Component: Favorites,
        },
        {
          path:'/about',
          Component: About
        },
        {
          path:'/phone-details/:id',
          Component: PhoneDetails,
          loader: () => fetch("../phones.json")
        }
      ]
    },
    {
      path:'*',
      Component: ErrorPage,
    },

  ])

