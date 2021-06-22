import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import VehicleCard from "./VehicleCard";
import * as API from "../../../api/apiclient";
import "./VehicleList.css";
import { Typography } from "@material-ui/core";

function VehicleList() {
  const [vehicleList, setVehicleList] = useState([]);
  useEffect(() => {
    async function getVehicleList() {
      const vehicles = await API.getVehicles();
      console.log(vehicles);
      setVehicleList(vehicles);
    }
    getVehicleList();
  }, []);

  return (
    <div className="vehicle-list">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" className="vehicle-list__title">
            Vehicle detection
          </Typography>
        </Grid>
        {vehicleList &&
          vehicleList.map((vehicle) => (
            <Grid item xs={4}>
              <VehicleCard vehicle={vehicle} />
            </Grid>
          ))}
        {vehicleList.length === 0 && <p>No vehicle found !</p>}
      </Grid>
    </div>
  );
}

export default VehicleList;
