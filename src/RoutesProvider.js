import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import {routes} from './routes'
const RoutesProvider = ({ menu }) => {
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.href} element={item.component} />
      ))}
      <Route element={() => <h1>404</h1>} />
    </Routes>
  );
};

export default RoutesProvider;
