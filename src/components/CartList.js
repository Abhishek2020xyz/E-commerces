// import React, { useEffect, useState, useContext } from "react";
// import { Cart } from "./CartContext";
// import "../App.css";

// const CartList = () => {
//   const [CART, setCART] = useState([]);

//   const { cart} = useContext(Cart);

//   useEffect(() => {
//     setCART(cart);
//   }, [cart]);
//   return (
//     <div style={{float: "right"}}>
//       {CART?.map((item, itemindex) => {
//         return (
//           <div>
//             <img src={item.imageUrl} width={40} />
//             <span>{item.title}</span>
//             <button
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return itemindex === index
//                     ? {
//                         ...item,
//                         quantity: item.quantity > 0 ? item.quantity - 1 : 0,
//                       }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               -
//             </button>
//             <span>{item.quantity}</span>
//             <button
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return itemindex === index
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               +
//             </button>
//             <span>Price: ${item.price * item.quantity}</span>
//           </div>
//         );
//       })}
//       <p>
//         $ <span></span>
//         {CART.map((item) => item.price * item.quantity).reduce(
//           (total, value) => total + value,
//           0
//         )}
//       </p>
//     </div>
//   );
// };

// export default CartList;


import React, { useEffect, useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CartList.css"; // Import the CSS file here


const CartList = () => {
  const history = useNavigate()
  const [CART, setCART] = useState([]);

  const { cart,handlePurchase } = useContext(Cart);
  const removehandler =()=>{

    setCART([])

  }

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const purchaseHandler =()=>{
    alert('you order succesfully placed')
    handlePurchase()
    history('/store')
  }

  return (
    <div className="cart-container">
      {CART?.map((item, itemindex) => {
        return (
          <div className="cart-item" key={itemindex}>
            <img src={item.imageUrl} width={70} />
            <h4>{item.title}</h4>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span className="price">Price: {item.price * item.quantity}</span>
          </div>
        );
      })}
      <p style={{fontSize:'30px'}}>
        <b>Total Amount $ </b><span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
       {CART.length>0&& <Button onClick={purchaseHandler} style = {{float:'right'}}>Purchase</Button>} 
      </p>

    </div>
  );
};

export default CartList;