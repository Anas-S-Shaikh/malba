import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import { Bell as BellIcon } from '../icons/bell';
// import { UserCircle as UserCircleIcon } from '../icons/user-circle';
// import { Users as UsersIcon } from '../icons/users';

const AppBarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const AppBarMain = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <AppBarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Prabhas">
            <IconButton>
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                  // ml: 1,
                }}
              >
                P{/* <SearchIcon fontSize="small" /> */}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBarRoot>
    </>
  );
};
