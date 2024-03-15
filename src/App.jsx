import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Contact from "./components/Contact"
import Home from "./Home"
import Layout from "./Layout"
import About from "./components/About"
import Signin from "./components/Signin"
import Events from "./components/Events"



const App =()=>{
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
       
        { path:"/Login",
        element:<Login />
      },
      {
        path:"/Home",
        element:<Home />
      },
        {
          path:"/Register",
          element:<Register />
        },
        { path:"/Contact",
        element:<Contact />
      },
      { path:"/About",
        element:<About />
      },{
        path:"/Signin",
        element:<Signin />
      },
      {
        path:"/Events",
        element:<Events />
      }
      ]
    },
  ])
  return(
    <RouterProvider router={router}/>
  )
}

export default App