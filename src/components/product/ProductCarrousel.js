import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductCarrousel = () => {
  const [products, setProducts] = useState([]);

  const responsive = (width) => {
    if (width < 480) return 2;
    if (width < 720) return 3;
    if (width < 1280) return 5;
    return 7;
  };

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        data.sort(function (x, y) {
          return x.active === y.active ? 0 : x.active ? -1 : 1;
        });
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        <p className="text-xl mt-32 mb-16 ml-8">Ofertas</p>
      </div>
      <div className="flex flex-row">
        <Swiper
          spaceBetween={responsive(window.innerWidth) - 5}
          slidesPerView={responsive(window.innerWidth)}
        >
          {products.map(product => (
            <SwiperSlide className="mb-5" key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-end">
        <p className="text-xl mt-16 mr-8">Ver tudo</p>
      </div>
    </>
  );
};

export default ProductCarrousel;
