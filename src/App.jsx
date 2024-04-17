



import Navbar from "./Components/Navbar";

import Signup from "./Components/Signup";
import Login from "./Components/Login";





import Api from "./Components/Api";
import Footer from "./Components/Footer";
import Space from "./Components/Space";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Accordion from "./Components/Accordin";
import Contact from "./Pages/Contact";
import Signup2 from "./Components/Signup2";



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<Accordion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
