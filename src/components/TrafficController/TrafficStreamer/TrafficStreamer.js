import "./TrafficStreamer.css";
import React from "react";
import ReactHlsPlayer from "react-hls-player";
import Paper from "@material-ui/core/Paper";

export default class TrafficStreamer extends React.Component {
  render() {
    return (
      <Paper className="traffic-streamer">
        <div className="traffic-player">
          <ReactHlsPlayer
            src="http://127.0.0.1:8888/live/khoanguyen/index.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        </div>
      </Paper>
    );
  }
}
