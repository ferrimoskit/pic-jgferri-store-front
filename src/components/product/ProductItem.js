import React from "react";

const ProductItem = ({ id, product }) => {
  return (
    <div
      className={
        "product-item rounded-lg h-96 shadow-black-500/50 shadow-lg min-w-32 mx-2.5 overflow-hidden" +
        (product.active ? " saturate-100" : " saturate-0")
      }
    >
        <div className={"absolute mr-1 ml-1 mt-1 mb-0 px-1 rounded-lg " + (product.offer ? "bg-lime-600": "")}><p className="text-xs text-white"> {product.offer?"Oferta" : ""}</p></div>
      <div className="top__image h-3/5">
        <img
          className="object-cover w-full h-full"
          src={product.picture}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col h-2/5 p-2">
        {/* Name Section */}
        <div>
          <p className="text-lg text-center">{product.name}</p>
        </div>

        {/* Bottom-aligned "Adicionar" */}
        <div className="mt-auto">
          <p className="text-sm text-green-700 text-center">Adicionar</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;