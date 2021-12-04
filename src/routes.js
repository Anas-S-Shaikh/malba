import { DashboardCustomize, ShoppingBag } from "@mui/icons-material";
import AddProduct from "./Pages/Products/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddService from "./Pages/AddService";
import AllProducts from "./Pages/Products/AllProducts";

export const routes = [
  {
    href: "/",
    icon: <DashboardCustomize fontSize="small" />,
    title: "Dashboard",
    component: <Dashboard />,
  },
  {
    href: "/all-product",
    icon: <ShoppingBag fontSize="small" />,
    title: "All Products",
    component: <AllProducts />,
  },
  {
    href: "/add-product",
    icon: <ShoppingBag fontSize="small" />,
    title: "Add New Products",
    component: <AddProduct />,
  },
  {
    href: "/add-service",
    icon: <WorkIcon fontSize="small" />,
    title: "Add New Service",
    component: <AddService />,
  },
];
