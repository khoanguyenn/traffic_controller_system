import { Endpoint } from "./endpoints"

export async function getVehicles() {
  const response = await fetch(Endpoint.GET_VEHICLES);
  const jsonResp = await response.json();
  return jsonResp;
}

export async function getUserInfo() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    name: "Nguyễn Ant",
    email: "D@gmail.comt",
    deviceID: "12",
    webIP: "localhost"
  }
}

export async function getDeviceList() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
      {id: 1, status: 'on'},
      {id: 2, status: 'off'},
      {id: 3, status: 'on'},
      {id: 4, status: 'off'},
      {id: 5, status: 'on'},
      {id: 6, status: 'off'},
    ]
}