import {  useState} from "react";
import Login from "./components/login/Login";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Store from "./components/pages/Store";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs"
// import AuthContext from "./components/store/auth-context";
// import AuthForm from "./components/login/AuthFrom";
import ProductDetails from "./components/pages/ProductDetails";
import Footer from "./components/pages/Footer"

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
      <Route path="/Login" element={<Login />} />
      <Route path="store" element={showCart ? <CartList /> : <Store />} />
        <Route path="/" element={<Home />} />
        
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/products/:product_id" element={<ProductDetails />} />
               
      </Routes>
     
      <Footer/>
    </div>
  );
};

export default App;

