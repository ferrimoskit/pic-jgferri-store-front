import React from "react";
import { useCart } from "./CartProvider";
import ProductCart from "../product/ProductCart";

const Cart = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.map((item) => (
        <ProductCart cartItem={item} key={item.id} />
      ))}
      <div className="flex flex-row justify-end mr-96 mt-16">
        <p className="text-3xl pt-2 text-lime-600">Total: R${Math.round((subtotal + Number.EPSILON) * 100) / 100} </p></div>
    </div>
  );
};

export default Cart;
