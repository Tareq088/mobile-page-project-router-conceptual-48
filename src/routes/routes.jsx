import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home"
import MainLayOut from "../Layouts/MainLayOut";


export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayOut,
      errorElement: <p>Error</p>,
      children:[
        {
            path:"/",
            element: <Home/>
            // Component: Home
        },
      ]
    },
    {
      path: "about",
      element: <p>this is about page</p>
    }
  ])

