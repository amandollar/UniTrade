import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/Support";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}/>
          <Route path="/pricing" element={<PricingPage />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
