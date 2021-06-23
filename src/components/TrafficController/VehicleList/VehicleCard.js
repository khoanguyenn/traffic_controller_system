import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: 120,
    display: "flex"
  },
  card: {
    display: "flex",
    width: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0.5rem"
  },
  description: {
    fontSize: ".8rem"
  },
  image: {
    minHeight: 120,
    minWidth: 120
  }
}));
const VehicleCard = (props) => {
  const classes = useStyles();
  const vehicle = props.vehicle;
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea className={classes.card}>
          <CardMedia
            className={classes.image}
            image={vehicle.url}
            title="Contemplative Reptile"
          />

            <CardContent className={classes.details}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="vehicle-card__title"
              >
                {vehicle.id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {vehicle.title.length > 25 ? vehicle.title.slice(0, 25).concat("...") : vehicle.title}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default VehicleCard;
