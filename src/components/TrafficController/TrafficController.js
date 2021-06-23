import React from "react";
import "./TrafficController.css";
import VehicleList from "./VehicleList/VehicleList";
import TrafficStream from "./TrafficStreamer/TrafficStreamer";
import Layout from "../../layout/Layout";
import Grid from "@material-ui/core/Grid";

const TrafficController = (props) => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://127.0.0.1:8888/live/khoanguyen/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TrafficStream {...videoJsOptions} />
        </Grid>
        <Grid item xs={12} md={4}>
          <VehicleList />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default TrafficController;
