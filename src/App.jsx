import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Notfound from "./Pages/NotFound/Notfound"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/About",
          element: <About/>,
        },
        {
          path: "/Portfolio",
          element:<Portfolio/> ,
        },
        {
          path: "/Contact",
          element:<Contact/> ,
        },
        {
          path:'*',
          element:<Notfound/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
