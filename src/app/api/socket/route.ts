import { NextResponse } from 'next/server';
import { Server } from 'socket.io';

export async function GET(req:any) {
  console.log(req.socket)
  // Check if the socket server is already running
  // if (req.socket.server.io) {
    
  //   console.log('Socket.io server already running');
  //   return NextResponse.json({ message: 'Socket.io server already running' });
  // }

  // Initialize the socket server
  // const io = new Server(req.socket.server);
  // req.socket.server.io = io;

  // io.on('connection', (socket) => {
  //   console.log('A user connected');
    
  //   socket.on('disconnect', () => {
  //     console.log('User disconnected');
  //   });
  // });
 console.log(req)
  console.log('Socket.io server started');
  return NextResponse.json({ message: 'Socket.io server started' });
}
