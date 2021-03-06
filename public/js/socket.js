const socket = io({
    path: '/ws'
});

socket.on('connect', () => {
    console.log('SocketConnected!');
});
socket.on('disconnect', () => {
    console.log('Socket Disonnected!');
});
socket.on('reconnect', () => {
    console.log('Socket Reconnected!');
});
socket.on('error', (error) => {
    console.log('Socket Error - ', error);
});
socket.on('message', (data) => {
    console.log('message received from server - ', data);
});
