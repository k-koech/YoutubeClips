import React from 'react'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container mx-auto'>
        <Navbar />
        <div style={{minHeight:"90vh"}}>
             <Outlet />
        </div>
        <Footer />
    </div>
  )
}
