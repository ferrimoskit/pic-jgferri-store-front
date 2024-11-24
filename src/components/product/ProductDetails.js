import React from "react";

const ProductDetails = () => {
  const product = {
    id: 1,
    name: "Graham's Manihot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dui in risus pretium vulputate non id velit. Sed luctus sem sem, nec rutrum orci molestie et. Vivamus vitae est egestas, venenatis mauris ac, mollis sapien. Nulla ullamcorper sollicitudin vestibulum. Maecenas at massa sapien. Aliquam tincidunt lobortis mi a tristique. Morbi eu aliquet massa. Pellentesque pharetra placerat ante eget volutpat. Aliquam ut quam scelerisque, ultricies sem vel, aliquam est. Nulla at sem sed arcu congue ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    active: true,
    available: true,
    offer: true,
    price: 88.25,
    picture: "http://dummyimage.com/1614x948.png/dddddd/000000",
  };
  return (
    <>
      <div>Voltar</div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
