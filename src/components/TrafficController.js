import React from "react";
import VehicleList from "./VehicleList";
import TrafficStream from "./TrafficStreamer";
import Layout from "../layout/Layout";

const TrafficController = (props) => {
  return (
    <Layout>
      <TrafficStream />
      <VehicleList />
    </Layout>
  );
};

export default TrafficController;
