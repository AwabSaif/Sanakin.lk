import React from "react"
import { Outlet } from "react-router-dom"
import './Layout.css'
import Header from "../../Sections/Header/Header"
import Footer from "../../Sections/Footer/Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}