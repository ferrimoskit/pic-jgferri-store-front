import React from "react";
import { useCart } from "../cart/CartProvider";

const ProductCart = (cartItem) => {
  const { dispatch } = useCart();

  return (
    <div className="shadow-lg w-1/2 max-h-[16%] flex flex-row overflow-hidden background-white rounded-xl m-auto mt-16">
      <div>
        <img
          src={cartItem.cartItem.picture}
          alt={cartItem.name}
          className=" h-36 w-36 object-cover p-2 m-auto rounded-xl"
        />
      </div>
      <div className="flex flex-col w-full">
        <p className="text-3xl pt-2">{cartItem.cartItem.name}</p>
        <div className="flex flex-row justify-end">
          <p className="text-xl pt-2">{cartItem.cartItem.quantity} unidades</p>
          <button
            className=""
            onClick={() =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: {
                  id: cartItem.cartItem.id,
                  quantity: cartItem.cartItem.quantity + 1,
                },
              })
            }
          >
            <p className="bg-lime-600 text-white mx-5 rounded-3xl text-sm h-5 w-5 m-auto flex items-center justify-center">+</p>
          </button>
          <button
            className=""
            onClick={() =>
              cartItem.cartItem.quantity > 1
                ? dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: {
                      id: cartItem.cartItem.id,
                      quantity: cartItem.cartItem.quantity - 1,
                    },
                  })
                : dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: cartItem.cartItem.id,
                    
                  })
            }
          >
            <p className="bg-lime-600 text-white mx-5 rounded-3xl text-sm h-5 w-5 m-auto flex items-center justify-center">-</p>
          </button>
        </div>

        <p className="text-3xl pt-2 text-lime-600">
          {`R$ ${
            Math.round(
              (cartItem.cartItem.price * cartItem.cartItem.quantity +
                Number.EPSILON) *
                100
            ) / 100
          }`}
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
