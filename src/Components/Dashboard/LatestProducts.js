import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import zigzag from "../../assets/images/zig-zag.jpeg";
import dumbell from "../../assets/images/dumble-shape.jpg";
import aggregate from "../../assets/images/aggregate.jpeg";
import { Link } from "react-router-dom";
const products = [
  {
    id: uuid(),
    name: "Zigzag Tiles 60mm",
    imageUrl: zigzag,
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Dumbell Shaped Tiles 60mm",
    imageUrl: dumbell,
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: "Zigzag Tiles 80mm",
    imageUrl: zigzag,
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "Recycled Aggregate 40mm",
    imageUrl: aggregate,
    updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(),
    name: "Recycled Aggregate 40mm",
    imageUrl: aggregate,
    updatedAt: subHours(Date.now(), 9),
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Product Inventory"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Link to="/products">
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Link>
    </Box>
  </Card>
);
