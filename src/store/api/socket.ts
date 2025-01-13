import { io } from 'socket.io-client'
import { REACT_APP_SOCKET_URL } from '../../config/app.config'


const accessToken= localStorage.getItem("accessToken")

export const socket = io(REACT_APP_SOCKET_URL, {
    transports: ['websocket'], // Use WebSocket for React Native
    autoConnect: true, // Automatically connect the socket
    reconnection: true, // Reconnect automatically if the connection is lost
    reconnectionAttempts: 5, // Limit the number of reconnection attempts
    reconnectionDelay: 5000, // Delay between reconnection attempts
    auth: { accessToken, }
})