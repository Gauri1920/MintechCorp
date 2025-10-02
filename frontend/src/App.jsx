import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Login from "./components/pages/Login";
import Signup from './components/pages/Signup';
import Service from "./components/pages/services";
import Projects from "./components/pages/projects";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  // Check localStorage once when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        {/* Login page */}
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={<Signup setIsAuth={setIsAuth} />}
        />

        {/* Protected Home page */}
        <Route
          path="/home"
          element={
            isAuth ? (
              <>
                <Navbar />
                <Hero />
                <Brands />
                <Services />
                <Banner />
                <Banner2 />
                <Testimonial />
                <Newsletter />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
  <Route path="/services" element={<Service />} /> 
  <Route path="/projects" element={isAuth ? <Projects /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
