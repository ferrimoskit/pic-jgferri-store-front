import React from "react";
import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import Home from "./components/views/home";
import ProductDetails from "./components/product/ProductDetails";
const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Home />} path="/" />
        <Route element={<ProductDetails />} path="/product/id"/>
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
