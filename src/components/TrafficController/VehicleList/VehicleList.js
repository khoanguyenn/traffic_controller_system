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

    socket.emit("join", deviceId);
    socket.on("message", handleMessage);

    // leave the room after component is destroyed
    return () => {
      socket.emit("leave", deviceId);
    };
  }, [socket]);

  const handleMessage = (message) => {
    const { metadata } = JSON.parse(message);
    // solve concurency problem by placeing callback function
    setVehicleList((vehicleList) => {
      if (vehicleList.length < 30) {
        return [
          ...vehicleList,
          { id: metadata.count, url: metadata.image, title: metadata.title },
        ];
      } else {
        vehicleList.shift();
        return [
          ...vehicleList,
          { id: metadata.count, url: metadata.image, title: metadata.title },
        ];
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

      {vehicleList.length === 0 && <p>No vehicle found!</p>}
    </Grid>
  );
};

export default VehicleList;
