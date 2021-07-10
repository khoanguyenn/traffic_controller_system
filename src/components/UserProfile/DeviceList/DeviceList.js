import Divider from "@material-ui/core/Divider";
import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Endpoint} from "../../../api/endpoints"

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
    paddingLeft: 15,
    paddingRight: 15,
    "&:hover": {
      background: "#efefef",
      cursor: "pointer"
    },
  },
});

const DeviceList = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const goToStreamScreen = (deviceId) => {
      history.push(Endpoint.DEVICE_SCREEN_URL + deviceId)
    };

    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} variant="h6" gutterBottom>
            Device List
            </Typography>

            {props.deviceList.length === 0 &&
                <Typography variant="caption" display="block" gutterBottom>
                    There is no devices.
                </Typography>
            }

            {props.deviceList.length > 0 &&
                <React.Fragment>
                    {props.deviceList.map((deviceItem) => (
                        <React.Fragment>
                            <Divider />
                            <div onClick={() => goToStreamScreen(deviceItem.id)} className={classes.textbox}>
                            <p className={classes.alignleft}>{deviceItem.name}</p>
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
