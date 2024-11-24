import React from "react";
import { useCart } from "./CartProvider";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: id }); 
    }
  };

  return (
    <div>Carrinho</div>
  );
};

export default Cart;