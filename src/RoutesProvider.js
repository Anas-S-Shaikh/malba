import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
const RoutesProvider = () => {
  return (
    <Routes>
      {routes.map((item, index) => (
        <Route key={index} path={item.href} element={item.component} />
      ))}
      <Route element={() => <h1>404</h1>} />
    </Routes>
  );
};

export default RoutesProvider;
