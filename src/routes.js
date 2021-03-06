import { DashboardCustomize, ShoppingBag } from "@mui/icons-material";
import AddProduct from "./Pages/Products/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddService from "./Pages/Services/AddService";
import AllServices from "./Pages/Services/AllServices";
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
    title: "Products",
    // component: <Categories />,
    children:[
      {
        href: "/products",
        icon: <ShoppingBag fontSize="small" />,
        title: "Categories",
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
    href: "service",
    icon: <ShoppingBag fontSize="small" />,
    title: "Services",
    children:[
      {
        href: "/services",
        icon: <ShoppingBag fontSize="small" />,
        title: "Categories",
        component: <AllServices />,
      },
      {
        href: "/service/new",
        icon: <WorkIcon fontSize="small" />,
        title: "Add New Service",
        component: <AddService />,
      }

    ]
  },
];
