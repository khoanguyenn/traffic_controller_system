import React from "react";
import "./TrafficController.css"
import VehicleList from "./VehicleList/VehicleList";
import TrafficStream from "./TrafficStreamer/TrafficStreamer";
import Layout from "../../layout/Layout";

const TrafficController = (props) => {
  return (
    <Layout>
      <TrafficStream />
      <VehicleList />
    </Layout>
  );
};

export default TrafficController;