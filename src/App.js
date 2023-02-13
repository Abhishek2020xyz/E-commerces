import {useState, useContext} from "react";
import "./App.css";
import Header, {NavBar} from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { Cart } from "./components/CartContext";



const App = ()  => {
  const [showCart,setShowCart] = useState(false);

  const { cart, addToCart} = useContext(Cart);

  
const handleShow = (value) => {
  setShowCart(value)
};

  return (
    <div>
      <NavBar handleShow={handleShow}/>
      <Header count={cart.length} handleShow={handleShow}/>
      {
        showCart ? 
        <CartList/> :
        <ProductList addToCart={addToCart}/>

      }
      
    </div>
  );
}

export default App;