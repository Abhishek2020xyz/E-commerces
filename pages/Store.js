import "../../App.css";
import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import {Cart} from "../CartContext";
const ProductList = () => {
  const {productsArr, addToCart} = useContext(Cart);
  
  return (
    <div className="flex">
      {
      
      productsArr.map((item, index) => {
        return <div style={{width:'50%' }}>
          <div className="product-item">   
          <h3>{item.title}</h3>
          <img src={item.imageUrl} width="50%"/>
          <p>Price: ${item.price}</p>
          <Button className="button"
          onClick={() => addToCart(item)}
          >Add to Cart</Button>
          </div>
         </div>;
      })
      
      }
       <footer>
            <div class="footer-titles">The Generics</div>
            {/* <div class="footer-icons">
              <ul>
                <li>
                  <a href="https://www.youtube.com">
                  <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"/>
                  </a>
                </li>
              </ul>
            </div> */}
        </footer>
    </div>
  );
};

export default ProductList;