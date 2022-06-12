import React from "react";
import { Routes, Route } from "react-router-dom";
import { trips } from "./helpers/trips";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainPage } from "./pages/MainPage";
import { SingUpPage } from "./pages/SingUpPage";
import { SingInPage } from "./pages/SingInPage";
import { TripPage } from "./pages/TripPage";
import { BookingsPage } from "./pages/BookingsPage";


const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage trips={trips} />} />
        <Route path="/sing-up" element={<SingUpPage />} />
        <Route path="/sing-in" element={<SingInPage />} />
        <Route path="/trip/:tripId" element={<TripPage trips={trips} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
