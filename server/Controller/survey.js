export default (http) => {
    const io = require('socket.io')(http, {
        cors: {
            origin: ["http://localhost:3000"]
        }
    });

    io.on("connection", (socket) => {
        socket.on('sent-response', (response) => {
            console.log(response)
            socket.broadcast.emit("response", response)
        })
    });
}