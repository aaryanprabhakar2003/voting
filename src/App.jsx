import Navbar from "./Components/Navbar";

import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Accordion from "./Components/Accordin";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Space from "./Components/Space";

function App() {
  return (
    <div>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<Accordion />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <Space/>
    </div>
  );
}

export default App;
