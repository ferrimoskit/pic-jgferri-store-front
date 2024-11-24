import React from "react";
import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import Home from "./components/views/home";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/navbar";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactRoutes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product/:id"/>
        <Route element={<Cart />} path="/carrinho"/>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
