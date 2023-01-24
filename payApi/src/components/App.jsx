import { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Home/HomePage";
import PricingPage from "./Pricing/PricingPage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";

export default function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/PricingPage" element={<PricingPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
