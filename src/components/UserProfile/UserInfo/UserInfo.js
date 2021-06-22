// import { useState } from "react";
// import "./UserInfo.css";
// import Card from "@material-ui/core/Card";
// import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";

// const UserInfo = (props) => {
//   const { userInfo, setUserInfo } = useState({});

//   return (
//     <Card class="user-info" variant="outlined">

//     </Card>
//   );
// };

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  alignleft: {
    float: "left",
  },
  alignright: {
    float: "right",
    opacity: 0.5,
  },

  textbox: {
    clear: "both",
    height: 50,
  },
});

const UserInfo = (props) => {
    const {userInfo, setUserInfo} = useState(props.userInfo);
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography variant="h6" gutterBottom>
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
