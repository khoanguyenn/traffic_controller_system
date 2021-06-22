import { GetApp } from "@material-ui/icons";

export async function getVehicles() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
  const jsonResp = await response.json();
  return jsonResp;
}
