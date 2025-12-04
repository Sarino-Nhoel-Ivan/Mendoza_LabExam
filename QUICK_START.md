<<<<<<< HEAD
# Quick Start Guide

## 🚀 Running the Application

### Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)

### Step 1: Install Dependencies (Already Done ✅)
```bash
npm run install-all
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is running
- Default connection: `mongodb://localhost:27017/sports-pwa`

**Option B: MongoDB Atlas (Cloud)**
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `server/.env`

### Step 3: Configure Environment (Optional)

Edit `server/.env`:
- Change `JWT_SECRET` to any random string
- Change `SESSION_SECRET` to any random string
- Google OAuth is optional (can skip for now)

### Step 4: Run the App

**Start both frontend and backend:**
```bash
npm run dev
```

This will start:
- ✅ Backend: http://localhost:5000
- ✅ Frontend: http://localhost:3000

**Or run separately:**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

### Step 5: Use the App

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" to create an account
3. Start creating sports tasks!

## 📝 Notes

- **Google OAuth is optional** - You can use email/password login without it
- **MongoDB must be running** before starting the server
- If you see connection errors, check your MongoDB setup

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `server/.env`
- For Atlas: Whitelist your IP address

**Port Already in Use:**
- Change `PORT` in `server/.env`
- Or close the application using the port

**Dependencies Missing:**
- Run `npm run install-all` again

=======
# Quick Start Guide

## 🚀 Running the Application

### Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)

### Step 1: Install Dependencies (Already Done ✅)
```bash
npm run install-all
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is running
- Default connection: `mongodb://localhost:27017/sports-pwa`

**Option B: MongoDB Atlas (Cloud)**
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `server/.env`

### Step 3: Configure Environment (Optional)

Edit `server/.env`:
- Change `JWT_SECRET` to any random string
- Change `SESSION_SECRET` to any random string
- Google OAuth is optional (can skip for now)

### Step 4: Run the App

**Start both frontend and backend:**
```bash
npm run dev
```

This will start:
- ✅ Backend: http://localhost:5000
- ✅ Frontend: http://localhost:3000

**Or run separately:**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

### Step 5: Use the App

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" to create an account
3. Start creating sports tasks!

## 📝 Notes

- **Google OAuth is optional** - You can use email/password login without it
- **MongoDB must be running** before starting the server
- If you see connection errors, check your MongoDB setup

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `server/.env`
- For Atlas: Whitelist your IP address

**Port Already in Use:**
- Change `PORT` in `server/.env`
- Or close the application using the port

**Dependencies Missing:**
- Run `npm run install-all` again

>>>>>>> 59cce31e39b989aab54997d7bea6196f868bc9dd
