import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nav } from "./Nav";


export const Header = () => {

    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__logo">Travel App</Link>

                <Routes>
                    <Route path="/" element={<Nav />} />
                    <Route path="/trip/:tripId" element={<Nav />} />
                    <Route path="/bookings" element={<Nav />} />
                </Routes>
            </div>
        </header>
    )
}