import React, { useState } from "react";
import { useCart } from "./CartProvider";
import ProductCart from "../product/ProductCart";

const Cart = () => {
  const { cart } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const userId = 2; // Replace with actual user ID if available.

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const orderData = {
      deliveryAddress,
      user: userId,
      products: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch("https://pic-jgferri-store-back.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Pedido realizado com sucesso!");
      } else {
        alert("Erro ao realizar pedido. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer o pedido:", error);
      alert("Erro ao realizar pedido. Verifique sua conexão.");
    }
  };

  return (
    <div>
      {cart.map((item) => (
        <ProductCart cartItem={item} key={item.id} />
      ))}
      <div className="flex flex-row justify-end mr-96 mt-16">
        <p className="text-3xl pt-2 text-lime-600">
          Total: R${Math.round((subtotal + Number.EPSILON) * 100) / 100}
        </p>
      </div>
      <div className="flex flex-col m-auto items-center">
        <div className="mt-8">
          <label
            htmlFor="deliveryAddress"
            className="block text-lg font-medium"
          >
            Endereço de entrega:
          </label>
          <input
            id="deliveryAddress"
            type="text"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            placeholder="Digite o endereço de entrega"
            className="border p-2 w-[50vw] mt-2"
          />
        </div>
        <div className="mt-8">
          <button
            onClick={handleOrder}
            className="bg-lime-600 text-white px-6 py-2 rounded-md hover:bg-lime-700"
          >
            Fazer pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
