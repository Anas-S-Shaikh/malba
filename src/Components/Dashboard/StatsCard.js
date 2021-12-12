import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const StatsCard = ({ title, data, color, icon }) => (
  <Card>
    <CardContent>
      <Grid container spacing={3} justifyContent='space-between'>
        <Grid item xs={8} >
          <Typography color="textSecondary" gutterBottom variant="overline">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {data}
            {/* $24k */}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar
            sx={{
              backgroundColor: color,
              height: { xs : 35, sm: 56},
              width: { xs : 35, sm: 56},
              // width: 56,
            }}
          >
            {/* <MoneyIcon /> */}
            {icon}
          </Avatar>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box> */}
    </CardContent>
  </Card>
);
