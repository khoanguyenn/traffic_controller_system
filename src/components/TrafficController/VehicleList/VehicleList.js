import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VehicleCard from "./VehicleCard";
import * as API from "../../../api/apiclient";
import "./VehicleList.css";
import { Typography } from "@material-ui/core";
import { SocketContext } from "../../../context/socket";

function VehicleList(props) {
  const io = useContext(SocketContext);

  const [vehicleList, setVehicleList] = useState([]);
  useEffect(() => {
    io.on('connection', (socket) => {
      socket.on(props.deviceId, console.log)
    });
    console.log('abc')
  }, [io]);

  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" className="vehicle-list__title">
            Vehicle detection
          </Typography>
        </Grid>

        {vehicleList &&
          vehicleList.map((vehicle) => (
            <Grid item xs={6}>
              <VehicleCard vehicle={vehicle} />
            </Grid>
          ))}

        {vehicleList.length === 0 && <p>No vehicle found !</p>}

      </Grid>
  );
}

export default VehicleList;
