import { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/pages/Footer"
import CartList from "./components/CartList";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs"
import ProductDetails from "./components/pages/ProductDetails";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header handleShow={handleShow} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="store" element={showCart ? <CartList /> : <Store />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/products/:product_id" element={<ProductDetails />} />
               
      </Routes>
      
      <Footer/>
    </div>
  );
};

export default App;