import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
const NotFound = () => {
  return (
    <h1>404</h1>
  )
}
const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {routes.map((item, index) => (
        <Route key={index} path={item.href} element={item.component} />
      ))}
    </Routes>
  );
};

export default RoutesProvider;
