import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Navbar'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
}
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

