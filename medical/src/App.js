import "./styles.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Arrowup from "./components/Arrowup/Arrowup";
import About from "./pages/About/About";
import Department from "./pages/Department/Department";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Arrowup />
      <Footer />
    </BrowserRouter>
  );
}
