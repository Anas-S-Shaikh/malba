import { DashboardCustomize, ShoppingBag } from "@mui/icons-material";
import AddProduct from "./Pages/Products/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddService from "./Pages/Services/AddService";
import AllServices from "./Pages/Services/AllServices";
import AllProducts from "./Pages/Products/AllProducts";
import Categories from "./Pages/Categories/Categories";

export const routes = [
  {
    href: "/",
    icon: <DashboardCustomize fontSize="small" />,
    title: "Dashboard",
    component: <Dashboard />,
  },
  {
    href: "product",
    icon: <ShoppingBag fontSize="small" />,
    title: "All Products",
    // component: <Categories />,
    children:[
      {
        href: "/products",
        icon: <ShoppingBag fontSize="small" />,
        title: "All Products",
        component: <Categories />,
      },
      {
        href: "/product/new",
        icon: <ShoppingBag fontSize="small" />,
        title: "Add New Products",
        component: <AddProduct />,
      },

    ]
  },
  
  {
    href: "/add-service",
    icon: <WorkIcon fontSize="small" />,
    title: "Add New Service",
    component: <AddService />,
  },
  {
    href: "/all-services",
    icon: <ShoppingBag fontSize="small" />,
    title: "All Services",
    component: <AllServices />,
  },
];
