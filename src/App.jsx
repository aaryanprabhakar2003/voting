import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Pages/Home";

import Faq from "./Pages/Faq";
import Api from "./Components/Api";
import Footer from "./Components/Footer";
import Space from "./Components/Space";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";



function App() {
 

  return (
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Testimonials/>
      <Footer/>
      
   
<Space/>
 
     
  {/* <Login/> */}
  {/* <Signup/> */}
    </div>
  );
}

export default App;
