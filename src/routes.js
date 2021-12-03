import { DashboardCustomize, ShoppingBag } from "@mui/icons-material";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import WorkIcon from '@mui/icons-material/Work';
import AddService from "./Pages/AddService";

export const routes = [
  {
    href: "/dashboard",
    icon: <DashboardCustomize fontSize="small" />,
    title: "Dashboard",
    component: <Dashboard />,
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
