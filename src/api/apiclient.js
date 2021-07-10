import { Endpoint } from "./endpoints";

export async function getVehicles() {
  const response = await fetch(Endpoint.GET_VEHICLES);
  const jsonResp = await response.json();
  return jsonResp;
}

export async function getUserInfo() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name: "Administrator",
    email: "admin@gmail.com",
    deviceID: "12",
    webIP: "localhost",
  };
}

export async function getListDevices() {
  const response = await fetch(Endpoint.LIST_DEVICES);
  const jsonResp = await response.json();
  return jsonResp.devices;
}

export async function getDevice(deviceId) {
  const response = await fetch(Endpoint.GET_DEVICE + deviceId);
  const jsonResp = await response.json();
  return jsonResp;
}

export async function getVehicleHistory(deviceId, from, to) {
  const requestUrl = Endpoint.GET_HISTORIES;
  const queryParam = `?deviceId=${deviceId}&start=${from.toString().substring(0, 20)}&stop=${to.toString().substring(0, 20)}`
  console.log(requestUrl + queryParam)
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const histories = [
    {
      count: 169,
      title: "car",
      image: "https://via.placeholder.com/600/d32776",
      time: "2021-07-09T17:10:47.988Z",
    },
    {
      count: 170,
      title: "bus",
      image: "https://via.placeholder.com/600/d32776",
      time: "2021-07-09T17:10:47.988Z",
    },
    {
      count: 171,
      title: "motorbike",
      image: "https://via.placeholder.com/600/d32776",
      time: "2021-07-09T17:10:47.988Z",
    },
    {
      count: 172,
      title: "car",
      image: "https://via.placeholder.com/600/d32776",
      time: "2021-07-09T17:10:47.988Z",
    },
    {
      count: 173,
      title: "truck",
      image: "https://via.placeholder.com/600/d32776",
      time: "2021-07-09T17:10:47.988Z",
    },
  ];

  return histories;
}
