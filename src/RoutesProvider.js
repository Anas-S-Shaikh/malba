import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/Product/ProductDetails";
import AddProduct from "./Pages/Products/AddProduct";
import AllProducts from "./Pages/Products/AllProducts";
import { routes } from "./routes";
const NotFound = () => {
  return <h1>404</h1>;
};
const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {routes.map((item, index) => (
        <Route key={index} path={item.href} element={item.component} />
      ))}
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/products/:id" element={<AllProducts />} />
      <Route path="/product/edit/:id" element={<AddProduct />} />
    </Routes>
  );
};

export default RoutesProvider;
