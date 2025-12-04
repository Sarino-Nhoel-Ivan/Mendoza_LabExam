const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const { initializePassport } = require('./config/passport');
const { authenticateSocket } = require('./middleware/socketAuth');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  }
  next();
});
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
initializePassport(passport);

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sports-pwa';
console.log('🔌 Attempting to connect to MongoDB...');

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 10000, // 10 seconds timeout
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log('📊 Database:', mongoose.connection.name);
  console.log('🌐 Host:', mongoose.connection.host);
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  console.error('🔍 Error details:', err.name);
  if (err.message.includes('authentication failed')) {
    console.error('💡 Check your MongoDB username and password in server/.env');
  } else if (err.message.includes('timeout')) {
    console.error('💡 Check your internet connection and MongoDB Atlas IP whitelist');
  } else if (err.message.includes('ENOTFOUND') || err.message.includes('getaddrinfo')) {
    console.error('💡 Check your MongoDB connection string (MONGODB_URI) in server/.env');
  }
  console.error('📝 Make sure:');
  console.error('   1. MongoDB Atlas IP whitelist includes your IP (or 0.0.0.0/0)');
  console.error('   2. MongoDB username and password are correct');
  console.error('   3. Connection string is properly formatted');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Sports PWA API is running',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Socket.IO for real-time updates
io.use(authenticateSocket);

io.on('connection', (socket) => {
  console.log('User connected:', socket.user?.id);

  socket.on('join-user-room', (userId) => {
    socket.join(`user-${userId}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.user?.id);
  });
});

// Make io available to routes
app.set('io', io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

