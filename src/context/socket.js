import { io } from "socket.io-client";
import React from 'react'
import { Endpoint } from "../api/endpoints";


export const socket = io(Endpoint.SOCKET_SERVER);
export const SocketContext = React.createContext();