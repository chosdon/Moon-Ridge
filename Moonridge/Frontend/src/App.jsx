import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;