import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export const Item = ({ products }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="60%"
          image={products.image}
          alt={products.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {products.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${products.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${products.id}`}>
          <Button size="small" color="primary">
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(179, 192, 195, 0.86)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 150,
  },
};

export default Item