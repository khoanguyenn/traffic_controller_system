import Divider from "@material-ui/core/Divider";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    height: 'fit-content',
    paddingTop: 10
  },
  title: {
    paddingBottom: 18
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
  },
});

const DeviceList = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} variant="h6" gutterBottom>
            Device List
            </Typography>

            {props.deviceList.length === 0 &&
                <Typography variant="caption" display="block" gutterBottom>
                    There is not any devices.
                </Typography>
            }

            {props.deviceList.length >= 1 &&
                <div className={classes.textbox}>
                <p className={classes.alignleft}>Device {props.deviceList[0].id}</p>
                <p className={classes.alignright}>{props.deviceList[0].status}</p>
                </div>
            }

            {props.deviceList.length >= 1 &&
                <React.Fragment>
                    {props.deviceList.slice(1).map((deviceItem) => (
                        <React.Fragment>
                            <Divider />
                            <div className={classes.textbox}>
                            <p className={classes.alignleft}>Device {deviceItem.id}</p>
                            <p className={classes.alignright}>{deviceItem.status}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            }
        </CardContent>
        </Card>
    );
};

export default DeviceList;
