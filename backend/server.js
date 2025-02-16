require('dotenv').config();
const app = require('./app');
const http = require('http');
const socketIo = require('socket.io');

// Create HTTP server and attach Socket.IO
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

// Handle Socket.IO connections for WebRTC signaling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle room joining
  socket.on('join', (room) => {
    socket.join(room);
    console.log(`${socket.id} joined room: ${room}`);
  });

  // Handle sending offer to remote peer
  socket.on('offer', (offer, room) => {
    socket.to(room).emit('offer', offer);
  });

  // Handle sending answer to remote peer
  socket.on('answer', (answer, room) => {
    socket.to(room).emit('answer', answer);
  });

  // Handle sending ICE candidates to remote peer
  socket.on('candidate', (candidate, room) => {
    socket.to(room).emit('candidate', candidate);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
