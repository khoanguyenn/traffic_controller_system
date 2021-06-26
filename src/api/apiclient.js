import { Endpoint } from "./endpoints"

export async function getVehicles() {
  const response = await fetch(Endpoint.GET_VEHICLES);
  const jsonResp = await response.json();
  return jsonResp;
}

export async function getUserInfo() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    name: "Administrator",
    email: "admin@gmail.com",
    deviceID: "12",
    webIP: "localhost"
  }
}

export async function getListDevices() {
  const response = await fetch(Endpoint.LIST_DEVICES)
  const jsonResp = await response.json();
  return jsonResp.devices;
}

export async function getDevice(deviceId) {
  const response = await fetch(Endpoint.GET_DEVICE + deviceId);
  const jsonResp = await response.json();
  return jsonResp;
}