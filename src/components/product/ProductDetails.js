import React, {useEffect, useState} from "react";
import { useCart } from "../cart/CartProvider";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams()
    
    const[product, setProduct] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:8080/products/${id}`)
        .then((response)=> response.json())
        .then(data=>setProduct(data))
        .catch(error => console.error(error))
    },[id])


  const { cart, dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div><Link to="/" >Voltar</Link></div>
      <div className="flex flex-row h-full max-h-[80%]">
        <div className="w-3/6 flex justify-content-center h-auto">
          <div className="w-5/6 h-5/6 mx-auto mt-12 rounded-3xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={product.picture}
              alt={product.name}
            />
          </div>
        </div>

        <div className="flex flex-col mt-12 max-w-[50%]">
          <div className="mt-5">
            <p className="text-2xl">{product.name}</p>
          </div>
          <div className="mt-5">
            <p className=" text-xl text-lime-700">{`R$${product.price}`}</p>
          </div>
          <div className="mt-5">
            <p className=" text-xl text-zinc-400">{product.description}</p>
          </div>
          <div className="mt-5">
            <div>
              <p className="text-xl">Quantidade</p>
            </div>
            <div className="flex flex-row">
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
            </div>
            <div>
              <p className="text-xl">Adicionais</p>
            </div>
            <div className="flex flex-row">
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
            </div>
            <div className="flex justify-center mt-16">
                <button className="bg-lime-600 p-4 w-96 rounded-3xl" onClick={addToCart}><p className="text-base text-white">Adicionar ao carrinho</p></button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
