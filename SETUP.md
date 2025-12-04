# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm run install-all
```

This will install dependencies for:
- Root package (concurrently)
- Server (Express, MongoDB, etc.)
- Client (React, etc.)

## Step 2: Set Up MongoDB

### Option A: Local MongoDB
1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   mongod
   ```

### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update MONGODB_URI in server/.env

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   # Windows PowerShell
   Copy-Item server\env.example server\.env
   
   # Mac/Linux
   cp server/env.example server/.env
   ```

2. Edit `server/.env` and update:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - A random secret string (use a strong password)
   - `SESSION_SECRET` - Another random secret string
   - `GOOGLE_CLIENT_ID` - Your Google OAuth Client ID (see Step 4)
   - `GOOGLE_CLIENT_SECRET` - Your Google OAuth Client Secret

## Step 4: Set Up Google OAuth (Optional but Recommended)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google+ API" or "Google Identity API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure consent screen if prompted
6. Application type: Web application
7. Authorized redirect URIs: `http://localhost:5000/api/auth/google/callback`
8. Copy Client ID and Client Secret to `server/.env`

**Note:** Google OAuth is optional. You can still use local email/password authentication without it.

## Step 5: Run the Application

### Development Mode (Both Frontend and Backend)
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend React app on http://localhost:3000

### Run Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

## Step 6: Access the Application

1. Open browser to http://localhost:3000
2. Click "Sign Up" to create an account
3. Or use "Continue with Google" if OAuth is configured
4. Start creating sports tasks!

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in server/.env
- For Atlas: Ensure your IP is whitelisted

### Port Already in Use
- Change PORT in server/.env
- Or kill the process using the port

### Google OAuth Not Working
- Verify redirect URI matches exactly
- Check Client ID and Secret in .env
- Ensure Google+ API is enabled

### Service Worker Not Registering
- Use HTTPS in production
- Clear browser cache
- Check browser console for errors

## Next Steps

- Read the full README.md for detailed documentation
- Customize the sports categories in TaskModal.js
- Add more features as needed!

