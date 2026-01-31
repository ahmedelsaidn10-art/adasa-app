import React from 'react'
import Navbar from './Components/navbar/Navbar';
import Home from './Components/navbar/Home/Home';
import Footer from './Components/navbar/Footer/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [

      { path: '', element: < Home /> },
      { path: 'Home', element: < Home /> },
      { path: 'Blog', element: < Blog/> },
      { path: 'About', element: < About/> },
      { path: '*', element: < NotFound/> },

    ]
  }
])


// createBrowserRouter()
export default function App() {
  return (
    <>

      {/* < Navbar />
    < Home />
    < Footer /> */}

      <RouterProvider router={router} />
    </>
  )
}
