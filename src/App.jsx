import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

const router = createBrowserRouter([
  {path: "", element:<Layout />, children: [
    {path: "", element:<Home />},
    {path: "Home", element:<Home />},
    {path: "About", element: <About />},
    {path:"Portfolio", element: <Portfolio />},
    {path:"Contact", element: <Contact />},
    {path: "*", element: <div className='h-screen bg-red-700 justify-center items-center'> 4 0 4 Not Found</div>}
  ]}
])

function App() {

  return (
   <>

   <RouterProvider router={router} />

    </>
  )
}

export default App
