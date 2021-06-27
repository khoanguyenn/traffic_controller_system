import React, { useContext, useEffect, useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import VehicleCard from "./VehicleCard";
import "./VehicleList.css";
import { Typography } from "@material-ui/core";
import { SocketContext } from "../../../context/socket";

const VehicleList = (props) => {
  const socket = useContext(SocketContext);
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    const deviceId = props.deviceId;

    const fakedata = {
      deviceId: deviceId,
      metadata: { count: Math.floor(Math.random() * 100), time: parseFloat("1624779234") },
    };

    setInterval(() => {socket.emit('message', JSON.stringify(fakedata))}, 1000);

    console.log("deviceId: " + props.deviceId);

    socket.emit("join", props.deviceId);

    socket.on("message", console.log);
  }, [socket]);

  const handleMessage = useCallback((message) => {
    console.log(message);
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" className="vehicle-list__title">
          Vehicle detection
        </Typography>
      </Grid>
      <p>{props.deviceId}</p>

      {vehicleList &&
        vehicleList.map((vehicle) => (
          <Grid item xs={6}>
            <VehicleCard vehicle={vehicle} />
          </Grid>
        ))}

      {vehicleList.length === 0 && <p>No vehicle found !</p>}
    </Grid>
  );
};

export default VehicleList;
