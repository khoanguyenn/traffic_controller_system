import React, { useEffect, useState } from "react";
import "./TrafficController.css";
import VehicleList from "./VehicleList/VehicleList";
import TrafficStream from "./TrafficStreamer/TrafficStreamer";
import Layout from "../../layout/Layout";
import Grid from "@material-ui/core/Grid";
import {
  useParams
} from "react-router-dom";

const TrafficController = (props) => {
  let { deviceId } = useParams();
  
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TrafficStream deviceId={deviceId} />
        </Grid>
        <Grid item xs={12} md={4}>
          <VehicleList />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default TrafficController;
