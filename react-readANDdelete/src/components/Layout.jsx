import React from 'react'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Layout() {
  return (
    <div className='container mx-auto'>
        <Navbar />
        <div style={{height:"90vh"}}>
             <Outlet />
             <ToastContainer />
        </div>
        <Footer />
    </div>
  )
}
