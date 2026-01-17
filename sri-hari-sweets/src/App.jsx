import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Categories/Category";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/shop" element={<Category />} />
        <Route path="/shop/category/:type" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
