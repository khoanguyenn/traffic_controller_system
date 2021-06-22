import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    height: "fit-content",
    paddingTop: 10,
    paddingBottom: 30,
  },
  title: {
    paddingBottom: 18,
  },
  alignleft: {
    float: "left",
  },
  alignright: {
    float: "right",
    opacity: 0.6,
  },
  textbox: {
    clear: "both",
    height: 50,
  }
});

const UserInfo = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h6" gutterBottom>
          User's Info
        </Typography>
        <div className={classes.textbox}>
          <p className={classes.alignleft}>Username</p>
          <p className={classes.alignright}>{props.userInfo.name}</p>
        </div>
        <Divider />
        <div className={classes.textbox}>
          <p className={classes.alignleft}>Gmail</p>
          <p className={classes.alignright}>{props.userInfo.email}</p>
        </div>
        <Divider />
        <div className={classes.textbox}>
          <p className={classes.alignleft}>Device ID</p>
          <p className={classes.alignright}>{props.userInfo.deviceID}</p>
        </div>
        <Divider />
        <div className={classes.textbox}>
          <p className={classes.alignleft}>Web IP</p>
          <p className={classes.alignright}>{props.userInfo.webIP}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
