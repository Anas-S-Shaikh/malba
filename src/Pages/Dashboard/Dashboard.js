import { Container, Grid, Typography } from "@mui/material";
import { StatsCard } from "../../Components/Dashboard/StatsCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Sales } from "../../Components/Dashboard/Sales";
import { TopProducts } from "../../Components/Dashboard/TopProducts";
import { LatestProducts } from "../../Components/Dashboard/LatestProducts";
import { LatestOrders } from "../../Components/Dashboard/LatestOrders";
const Dashboard = () => (
  <>
    {/* <Box
      component="main"
      sx={{
        // flexGrow: 1,
        // py: 4,
      }}
    > */}
    <Container maxWidth={false} sx={{ py:2}}>
      <Typography sx={{ m: 1 }} variant="h4">
        Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} xl={3} xs={12}>
          <TopProducts sx={{ height: "100%" }} />
        </Grid>
        <Grid item lg={8} md={8} xl={9} xs={12}>
          <Sales />
        </Grid>
        <Grid item lg={4} md={4} xl={3} xs={12}>
          <LatestProducts sx={{ height: "100%" }} />
        </Grid>
        <Grid item lg={8} md={8} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={6}>
          {/* <TotalProfit sx={{ height: "100%" }} /> */}
          <StatsCard
            title="Lifetime Sales"
            data="₹23k"
            color="success.main"
            icon={<AttachMoneyIcon />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={6}>
          {/* <Budget sx={{ height: "100%" }} /> */}
          <StatsCard
            title="Total Orders"
            data="5340"
            color="primary.main"
            icon={<LocalShippingIcon />}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={6}>
          {/* <TotalCustomers /> */}
          <StatsCard
            title="Pending Payment"
            data="₹19.09k"
            color="error.main"
            icon={<PendingActionsIcon />}
          />
        </Grid>
        <Grid item xl={3} lg={3} sm={6} xs={6}>
          {/* <TasksProgress /> */}
          <StatsCard
            title="Pending Order"
            data="23"
            color="error.main"
            icon={<HourglassBottomIcon />}
          />
        </Grid>
      </Grid>
    </Container>
    {/* </Box> */}
  </>
);
export default Dashboard;
