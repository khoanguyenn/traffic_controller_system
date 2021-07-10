import React, { useContext, useEffect, useState } from "react";
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

    socket.emit("join", props.deviceId);

    socket.on("message", handleMessage);

    // test
    // let count = 0;
    // setInterval(() => {
    //   handleMessage(JSON.stringify({metadata: {count: count}}));
    //   count++;
    //   console.log(vehicleList)
    // }, 1000)
  }, [socket]);

  const handleMessage = (message) => {
    const { metadata } = JSON.parse(message);
    console.log(metadata)
    // solve concurency problem by placeing callback function
    setVehicleList((vehicleList) => {
      if (vehicleList.length < 5) {
        return [...vehicleList, {id: metadata.count, url: metadata.image, title: metadata.count.toString()}];
      } else {
        vehicleList.shift();
        return [...vehicleList, {id: metadata.count, url: metadata.image, title: metadata.count.toString()}];
      }
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" className="vehicle-list__title">
          Vehicle detection
        </Typography>
      </Grid>

      {vehicleList.length > 0 &&
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
