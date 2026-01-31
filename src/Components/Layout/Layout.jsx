import React from 'react'
import Navbar from './../navbar/Navbar';
import Footer from './../navbar/Footer/Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <Navbar/>

    <Outlet/>

    <Footer/>
    

    </>
  )
}
