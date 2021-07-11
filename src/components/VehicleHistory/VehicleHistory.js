import React, { useState, useEffect } from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Layout from "../../layout/Layout";
import { makeStyles, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/LinearProgress";
import VehicleCard from "../TrafficController/VehicleList/VehicleCard";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import * as API from "../../api/apiclient";

const useStyles = makeStyles((theme) => ({
  querySelection: {
    "& > *": {
      margin: theme.spacing(2),
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
  const [displayingVehicle, setDisplayingVehicle] = React.useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [page, setPage] = React.useState(1);
  const [maxPage, setMaxPage] = React.useState(1);
  const ROWS_PER_PAGE = 32;

  useEffect(() => {
    (async () => {
      setDeviceList(await API.getListDevices());
    })();
  }, []);

  const handleChange = (event) => {
    setDeviceId(event.target.value);
  };

  const handleHistoryQuery = async () => {
    const parsedFrom = moment(new Date(selectedDateFrom)).format(
      "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
    );
    const parsedTo = moment(new Date(selectedDateTo)).format(
      "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
    );
    setLoadingHistory(true);
    (async () => {
      const _vehicleHistory = await API.getVehicleHistory(
        deviceId,
        parsedFrom,
        parsedTo
      );
      setVehicleHistory(_vehicleHistory);
      setDisplayingVehicle(_vehicleHistory.slice(0, ROWS_PER_PAGE));
      setPage(1); // set to default page
      setMaxPage(
        _vehicleHistory.length > 0
          ? Math.ceil(_vehicleHistory.length / ROWS_PER_PAGE)
          : 1
      );
      setLoadingHistory(false);
    })();
  };

  const onPrevious = () => {
    if (page === 1) return;
    const _currentPage = page - 1;
    setPage(_currentPage);
    setDisplayingVehicle(
      vehicleHistory.slice(
        (_currentPage - 1) * ROWS_PER_PAGE,
        _currentPage * ROWS_PER_PAGE
      )
    );
  };

  const onNext = () => {
    if (page === maxPage) return;
    const _currentPage = page + 1;
    setPage(_currentPage);
    setDisplayingVehicle(
      vehicleHistory.slice(
        (_currentPage - 1) * ROWS_PER_PAGE,
        _currentPage * ROWS_PER_PAGE
      )
    );
  };
  const beautifyTime = (time) => {
    return moment(time).format("DD-MM-yyyy HH:mm");
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
            format="DD/MM/yyyy hh:mm A"
          />
          <DateTimePicker
            value={selectedDateTo}
            onChange={handleDateChangeTo}
            format="DD/MM/yyyy hh:mm A"
          />
        </MuiPickersUtilsProvider>

        <Button
          onClick={handleHistoryQuery}
          variant="contained"
          color="primary"
        >
          FIND HISTORY
        </Button>

        <ButtonGroup
          size="medium"
          color="primary"
          aria-label="primary button group"
        >
          <Button onClick={onPrevious}>PREVIOUS</Button>
          <Button onClick={onNext}>NEXT</Button>
        </ButtonGroup>

        <Typography gutterBottom variant="h8">
          There are {vehicleHistory.length} results.
        </Typography>
        <Typography gutterBottom variant="h6">
          Page {page} of {maxPage}
        </Typography>

        {loadingHistory && <CircularProgress />}

        {displayingVehicle.length === 0 && <p>History query result is empty. Please try with another query...</p>}

        {/* Device History */}
        <Grid container spacing={2}>
          {displayingVehicle &&
            displayingVehicle.length > 0 &&
            displayingVehicle.map((vehicle, index) => (
              <Grid item xs={3} key={index}>
                <VehicleCard
                  key={index}
                  vehicle={{
                    id: vehicle.count,
                    title: vehicle.title,
                    url: vehicle.image,
                    time: beautifyTime(vehicle.time),
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
