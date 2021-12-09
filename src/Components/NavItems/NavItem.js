import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export const NavItem = (props) => {
  const navigate = useNavigate();

  const { href, icon, title, closeSidebar, subList, ...others } = props;
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          display: "flex",
          mb: 0.5,
          py: 0,
          px: 2,
        }}
        {...others}
      >
        {/* <Link to={href} style={{ width: "100%" }}> */}
        <Button
          startIcon={icon}
          endIcon={subList && (open ? <ExpandLess /> : <ExpandMore />)}
          onClick={closeSidebar}
          disableRipple
          onClick={() => {
            if (!subList) {
              navigate(href);
            } else {
              setOpen(!open);
            }
          }}
          sx={{
            backgroundColor: active && "rgba(255,255,255, 0.08)",
            borderRadius: 1,
            color: subList
              ? location.pathname.includes(href)
                ? "secondary.main"
                : "neutral.300"
              : active
              ? "secondary.main"
              : "neutral.300",
            fontWeight: subList
              ? location.pathname.includes(href) && "fontWeightBold"
              : active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: subList
                ? location.pathname.includes(href)
                  ? "secondary.main"
                  : "neutral.400"
                : active
                ? "secondary.main"
                : "neutral.400",
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)",
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
        {/* </Link> */}
      </ListItem>
      {subList && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subList.map((child) => (
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  mb: 0.5,
                  py: 0,
                  px: 2,
                }}
                {...others}
              >
                <Link to={child.href} style={{ width: "100%" }}>
                  <Button
                    startIcon={child.icon}
                    onClick={closeSidebar}
                    disableRipple
                    sx={{
                      backgroundColor:
                        location.pathname.includes(child.href) &&
                        "rgba(255,255,255, 0.08)",
                      borderRadius: 1,
                      color: location.pathname.includes(child.href)
                        ? "secondary.main"
                        : "neutral.300",
                      fontWeight:
                        location.pathname.includes(child.href) &&
                        "fontWeightBold",
                      justifyContent: "flex-start",
                      pr: 3,
                      pl: 5,
                      textAlign: "left",
                      textTransform: "none",
                      width: "100%",
                      "& .MuiButton-startIcon": {
                        color: location.pathname.includes(child.href)
                          ? "secondary.main"
                          : "neutral.400",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255, 0.08)",
                      },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>{child.title}</Box>
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
