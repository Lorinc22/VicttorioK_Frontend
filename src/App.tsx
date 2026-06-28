import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Works from "./Pages/Works/Works";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

