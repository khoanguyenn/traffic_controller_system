import React, { useState, useEffect } from "react";
import moment from "moment";
import MomentUtils from '@date-io/moment';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Layout from "../../layout/Layout";
import { makeStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/LinearProgress';
import VehicleCard from "../TrafficController/VehicleList/VehicleCard";
import * as API from "../../api/apiclient";

const useStyles = makeStyles((theme) => ({
  querySelection: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  label: {
    paddingTop: 10,
    paddingRight: 20,
    width: 166,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const VehicleHistory = (props) => {
  const classes = useStyles();
  const [deviceList, setDeviceList] = React.useState([]);
  const [deviceId, setDeviceId] = React.useState("");
  const [selectedDateFrom, handleDateChangeFrom] = useState(new Date());
  const [selectedDateTo, handleDateChangeTo] = useState(new Date());
  const [vehicleHistory, setVehicleHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  useEffect(() => {
    (async () => {
      setDeviceList(await API.getListDevices());
    })();
  }, []);

  const handleChange = (event) => {
    setDeviceId(event.target.value);
  };

  const handleHistoryQuery = async () => {
    const parsedFrom = moment(new Date(selectedDateFrom)).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    const parsedTo = moment(new Date(selectedDateTo)).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    setLoadingHistory(true);
    (async () => {
      setVehicleHistory(
        await API.getVehicleHistory(deviceId, parsedFrom, parsedTo)
      );
      setLoadingHistory(false);
    })();
  };

  return (
    <Layout>
      <div className={classes.querySelection}>
        {/* Device selection */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Choose a device
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={deviceId}
            onChange={handleChange}
            label="Select device"
          >
            {deviceList.length > 0 &&
              deviceList.map((device) => (
                <MenuItem value={device.id}>{device.name}</MenuItem>
              ))}
          </Select>
        </FormControl>

        {/* <div>
          <Typography className={classes.label} variant="h8">
            From:
          </Typography>
          <Typography className={classes.label} variant="h8">
            To:
          </Typography>
        </div> */}

        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            value={selectedDateFrom}
            onChange={handleDateChangeFrom}
            format="DD/MM/yyyy hh:mm"
          />
          <DateTimePicker
            value={selectedDateTo}
            onChange={handleDateChangeTo}
            format="DD/MM/yyyy hh:mm"
          />
        </MuiPickersUtilsProvider>

        <Button
          onClick={handleHistoryQuery}
          variant="contained"
          color="primary"
        >
          FIND HISTORY
        </Button>

        { loadingHistory && <CircularProgress /> }

        {/* Device History */}
        <Grid container spacing={2}>
          {vehicleHistory.length > 0 &&
            vehicleHistory.map((vehicle) => (
              <Grid item xs={3}>
                <VehicleCard
                  vehicle={{
                    id: vehicle.count,
                    title: vehicle.title,
                    url: vehicle.image,
                  }}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </Layout>
  );
};

export default VehicleHistory;
