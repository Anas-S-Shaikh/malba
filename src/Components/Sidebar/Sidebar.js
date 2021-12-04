import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { NavItem } from "../NavItems/NavItem";
import { useTheme } from "@mui/material/styles";
import { routes } from "../../routes";

export const Sidebar = (props) => {
  const { open, onClose } = props;
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3, fontFamily:'Roboto', letterSpacing:'4px', fontWeight:'600', textAlign:'center' }}>
            MALBA
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            mb: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {routes.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              closeSidebar={onClose}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Malba INC.
          </Typography>
          <Typography color="neutral.500" variant="body2">
            © 2021 Malba, India. All rights reserved
          </Typography>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
