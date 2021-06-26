import "./TrafficStreamer.css";
import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import * as API from "../../../api/apiclient";

const TrafficStreamer = (props) => {
  const [streamUrl, setStreamUrl] = useState("")

  useEffect(() => {
    (async (deviceId) => {
      const deviceInfo = await API.getDevice(deviceId);
      setStreamUrl(deviceInfo.device.url);
    })(props.deviceId);
  }, [])

  return (
    <div className="traffic-streamer">
      <p style={{color: 'lightcyan'}}>{streamUrl}</p>
      <ReactHlsPlayer
        src={streamUrl}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
      {props.toolBar}
    </div>
  );
}
 
export default TrafficStreamer;