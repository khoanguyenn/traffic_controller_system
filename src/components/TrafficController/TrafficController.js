import React, { useState } from "react";
import "./TrafficController.css";
import VehicleList from "./VehicleList/VehicleList";
import TrafficStream from "./TrafficStreamer/TrafficStreamer";
import Layout from "../../layout/Layout";
import {
  Grid,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import CommandModal from "./CommandModal/CommandDialog";

const TrafficController = (props) => {
  let { deviceId } = useParams();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const toolBar = (
    <div style={{margin: "10px 20px"}}>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Command Box
      </Button>
      <FormControl variant="outlined" style={{marginLeft: "15px"}}>
        <InputLabel id="demo-simple-select-outlined-label">Stream</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value="Ten"
          style={{ minWidth: 120}}
          label="Stream"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Nostream</MenuItem>
          <MenuItem value={20}>Dotstream</MenuItem>
          <MenuItem value={30}>doesnotstream</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TrafficStream deviceId={deviceId} toolBar={toolBar} />
        </Grid>
        <Grid item xs={12} md={4}>
          <VehicleList deviceId={deviceId}/>
        </Grid>
      </Grid>
      <CommandModal open={open} onClose={handleClose} />
    </Layout>
  );
};

export default TrafficController;
