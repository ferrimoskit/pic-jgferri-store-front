import React from "react";
import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import Home from "./components/views/home";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/navbar";
import Login from "./components/views/Login";
import Admin from "./components/views/Admin";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactRoutes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product/:id" />
        <Route element={<Cart />} path="/carrinho" />
        <Route element={<Login />} path="/login" />
        <Route element={<Admin />} path="/admin" />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
