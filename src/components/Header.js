
import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Cart } from "./CartContext";


const Header = (props) => {
   const {cart} = useContext(Cart);
  return (
    <>
    <div className="navBar">
      <Nav className="justify-content-center" activeKey="/home">
        
      <Link  style={{margin:'20px'}} to ="/home">HOME</Link>
      
      <Link style={{margin:'20px'}} to="/store">STORE</Link>
      <Link style={{margin:'20px'}} to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link>
      <Link style={{margin:'20px'}} to="contact">Contact Us</Link>
      </Nav>
       </div>
    <div className="flex shopping-cart ">
      <h4>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{cart.length}</sup>
      </Button>
    </div>
    </>
  );
};





export default Header;