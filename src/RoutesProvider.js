import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/Product/ProductDetails";
import AddProduct from "./Pages/Products/AddProduct";
import AllProducts from "./Pages/Products/AllProducts";
import AddService from "./Pages/Services/AddService";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import { routes } from "./routes";
const NotFound = () => {
  return <h1>404</h1>;
};
const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {routes.map((item, index) => {
        return item.children ? (
          item.children.map((child, idx) => (
            <Route key={idx} path={child.href} element={child.component} />
          ))
        ) : (
          <Route key={index} path={item.href} element={item.component} />
        );
      })}
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/service-details/:id" element={<ServiceDetails />} />
      <Route path="/products/:id" element={<AllProducts />} />
      <Route path="/product/edit/:id" element={<AddProduct />} />
      <Route path="/service/edit/:id" element={<AddService />} />
    </Routes>
  );
};

export default RoutesProvider;
