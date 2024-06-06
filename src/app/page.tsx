"use client"
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const Home = () => {
  const [message, setMessage] = useState('');
  const socketRef = useRef();

  // useEffect(() => {
  //   const socket = socketRef.current = io('http://localhost:3000/api/socket');

  //   socket.on('connect', () => {
  //     console.log('connected to server');
  //   });

  //   socket.on('message', (msg) => {
  //     setMessage(msg);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <h1>Socket.IO with Next.js</h1>
      <div className=' hover:scale-150  h-[100px] w-[100px] bg-blue-600'>

      </div>
      {/* <p>Message from server: {message}</p> */}
    </div>
  );
};

export default Home;
