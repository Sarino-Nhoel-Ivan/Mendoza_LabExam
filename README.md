<<<<<<< HEAD
# Sports Task Manager - Full-Stack PWA

A full-stack real-time Progressive Web Application with secure authentication, themed around sports. Users can manage their sports-related tasks with offline support and real-time updates.

## Features

- ✅ **Authentication**
  - Local username/password registration and login
  - Google OAuth 2.0 / OIDC login
  - Secure JWT-based authentication

- ✅ **Task Management**
  - Create, edit, and delete tasks
  - Sports-themed categorization (Football, Basketball, Soccer, Tennis, etc.)
  - Priority levels (Low, Medium, High)
  - Status tracking (Pending, In Progress, Completed)
  - Due date management

- ✅ **Progressive Web App (PWA)**
  - Installable as a native app
  - Offline support with service worker
  - Cached content accessible when offline
  - Responsive design

- ✅ **Real-Time Updates**
  - WebSocket-based real-time task updates
  - Instant notifications when tasks are created, updated, or deleted

- ✅ **Multiple Pages**
  - Home page
  - Login page
  - Register page
  - Tasks page (main dashboard)
  - Profile page

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios for API calls
- Socket.IO Client for real-time updates
- Service Worker for PWA functionality

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Passport.js for authentication (Local & Google OAuth)
- Socket.IO for real-time communication
- JWT for secure token-based authentication

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials (for Google login)

### Setup Instructions

1. **Clone and install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Configure environment variables:**

   Create `server/.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sports-pwa
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   SESSION_SECRET=your-super-secret-session-key-change-this-in-production
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   CLIENT_URL=http://localhost:3000
   ```

3. **Set up Google OAuth:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
   - Copy Client ID and Client Secret to `.env` file

4. **Start MongoDB:**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Run the application:**
   ```bash
   # Run both frontend and backend
   npm run dev

   # Or run separately:
   npm run server  # Backend on port 5000
   npm run client  # Frontend on port 3000
   ```

## Usage

1. **Register/Login:**
   - Visit `http://localhost:3000`
   - Click "Sign Up" to create an account with email/password
   - Or use "Continue with Google" for OAuth login

2. **Create Tasks:**
   - Navigate to Tasks page
   - Click "New Task" button
   - Fill in task details (title, description, sport, priority, status, due date)
   - Save the task

3. **Manage Tasks:**
   - View all tasks on the Tasks page
   - Filter by status (All, Pending, In Progress, Completed)
   - Edit tasks by clicking "Edit" button
   - Delete tasks by clicking "Delete" button

4. **Install as PWA:**
   - Open the app in a supported browser (Chrome, Edge, Safari)
   - Look for the install prompt or use browser menu
   - Click "Install" to add to home screen
   - App will work offline after installation

5. **Offline Mode:**
   - After initial load, the app caches content
   - When offline, you can still view cached tasks
   - New tasks created offline will sync when connection is restored

## Project Structure

```
sports-pwa-app/
├── server/                 # Backend Express application
│   ├── config/            # Passport configuration
│   ├── middleware/         # Authentication middleware
│   ├── models/            # MongoDB models (User, Task)
│   ├── routes/            # API routes (auth, tasks)
│   ├── index.js           # Server entry point
│   └── package.json
├── client/                # Frontend React application
│   ├── public/            # Static files, manifest, service worker
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # React context (Auth, Socket)
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # React entry point
│   └── package.json
└── package.json           # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Real-Time Events

- `task-created` - Emitted when a task is created
- `task-updated` - Emitted when a task is updated
- `task-deleted` - Emitted when a task is deleted

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Secure HTTP-only cookies
- CORS configuration
- Input validation
- User-specific task access control

## Development

- Frontend runs on `http://localhost:3000`
- Backend runs on `http://localhost:5000`
- MongoDB should be running on default port `27017` or configure in `.env`

## Production Deployment

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```

2. Set production environment variables
3. Use a process manager like PM2 for Node.js
4. Configure MongoDB Atlas or production MongoDB instance
5. Update CORS and CLIENT_URL in environment variables

## License

ISC

=======
# Sports Task Manager - Full-Stack PWA

A full-stack real-time Progressive Web Application with secure authentication, themed around sports. Users can manage their sports-related tasks with offline support and real-time updates.

## Features

- ✅ **Authentication**
  - Local username/password registration and login
  - Google OAuth 2.0 / OIDC login
  - Secure JWT-based authentication

- ✅ **Task Management**
  - Create, edit, and delete tasks
  - Sports-themed categorization (Football, Basketball, Soccer, Tennis, etc.)
  - Priority levels (Low, Medium, High)
  - Status tracking (Pending, In Progress, Completed)
  - Due date management

- ✅ **Progressive Web App (PWA)**
  - Installable as a native app
  - Offline support with service worker
  - Cached content accessible when offline
  - Responsive design

- ✅ **Real-Time Updates**
  - WebSocket-based real-time task updates
  - Instant notifications when tasks are created, updated, or deleted

- ✅ **Multiple Pages**
  - Home page
  - Login page
  - Register page
  - Tasks page (main dashboard)
  - Profile page

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios for API calls
- Socket.IO Client for real-time updates
- Service Worker for PWA functionality

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Passport.js for authentication (Local & Google OAuth)
- Socket.IO for real-time communication
- JWT for secure token-based authentication

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials (for Google login)

### Setup Instructions

1. **Clone and install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Configure environment variables:**

   Create `server/.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sports-pwa
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   SESSION_SECRET=your-super-secret-session-key-change-this-in-production
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   CLIENT_URL=http://localhost:3000
   ```

3. **Set up Google OAuth:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
   - Copy Client ID and Client Secret to `.env` file

4. **Start MongoDB:**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Run the application:**
   ```bash
   # Run both frontend and backend
   npm run dev

   # Or run separately:
   npm run server  # Backend on port 5000
   npm run client  # Frontend on port 3000
   ```

## Usage

1. **Register/Login:**
   - Visit `http://localhost:3000`
   - Click "Sign Up" to create an account with email/password
   - Or use "Continue with Google" for OAuth login

2. **Create Tasks:**
   - Navigate to Tasks page
   - Click "New Task" button
   - Fill in task details (title, description, sport, priority, status, due date)
   - Save the task

3. **Manage Tasks:**
   - View all tasks on the Tasks page
   - Filter by status (All, Pending, In Progress, Completed)
   - Edit tasks by clicking "Edit" button
   - Delete tasks by clicking "Delete" button

4. **Install as PWA:**
   - Open the app in a supported browser (Chrome, Edge, Safari)
   - Look for the install prompt or use browser menu
   - Click "Install" to add to home screen
   - App will work offline after installation

5. **Offline Mode:**
   - After initial load, the app caches content
   - When offline, you can still view cached tasks
   - New tasks created offline will sync when connection is restored

## Project Structure

```
sports-pwa-app/
├── server/                 # Backend Express application
│   ├── config/            # Passport configuration
│   ├── middleware/         # Authentication middleware
│   ├── models/            # MongoDB models (User, Task)
│   ├── routes/            # API routes (auth, tasks)
│   ├── index.js           # Server entry point
│   └── package.json
├── client/                # Frontend React application
│   ├── public/            # Static files, manifest, service worker
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # React context (Auth, Socket)
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # React entry point
│   └── package.json
└── package.json           # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Real-Time Events

- `task-created` - Emitted when a task is created
- `task-updated` - Emitted when a task is updated
- `task-deleted` - Emitted when a task is deleted

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Secure HTTP-only cookies
- CORS configuration
- Input validation
- User-specific task access control

## Development

- Frontend runs on `http://localhost:3000`
- Backend runs on `http://localhost:5000`
- MongoDB should be running on default port `27017` or configure in `.env`

## Production Deployment

1. Build the React app:
   ```bash
   cd client
   npm run build
   ```

2. Set production environment variables
3. Use a process manager like PM2 for Node.js
4. Configure MongoDB Atlas or production MongoDB instance
5. Update CORS and CLIENT_URL in environment variables

## License

ISC

>>>>>>> 59cce31e39b989aab54997d7bea6196f868bc9dd
