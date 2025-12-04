import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  // Return null if context is null (instead of throwing error)
  // Components should handle null socket gracefully
  return context;
};

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem('token');
      if (token) {
        const newSocket = io(SOCKET_URL, {
          auth: {
            token: token
          },
          transports: ['websocket', 'polling']
        });

        newSocket.on('connect', () => {
          console.log('Socket connected');
          if (user?.id) {
            newSocket.emit('join-user-room', user.id);
          }
        });

        newSocket.on('disconnect', () => {
          console.log('Socket disconnected');
        });

        newSocket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
        });

        setSocket(newSocket);

        return () => {
          newSocket.close();
          setSocket(null);
        };
      }
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

