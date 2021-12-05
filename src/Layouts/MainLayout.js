import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { DashboardNavbar } from "./dashboard-navbar";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { AppBarMain } from "../Components/Appbar/Appbar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 84,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
  flexGrow: 1,
}));

export const MainLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <MainLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </MainLayoutRoot>
      <AppBarMain onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
