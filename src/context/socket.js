import socketio from "socket.io-client";
import React from 'react'
import { Endpoint } from "../api/endpoints";


export const socket = socketio(Endpoint.SOCKET_SERVER);
export const SocketContext = React.createContext();