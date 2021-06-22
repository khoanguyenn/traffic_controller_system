import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 150,
    maxHeight: 150,
  },
  media: {
    height: 60,
    width: 60
  },

}));
const VehicleCard = (props) => {
  const classes = useStyles();
  const vehicle = props.vehicle;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={vehicle.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {vehicle.id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {vehicle.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default VehicleCard;
