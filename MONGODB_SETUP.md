# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to **https://www.mongodb.com/cloud/atlas/register**
2. Click **"Try Free"** or **"Sign Up"**
3. Fill in your details:
   - Email address
   - Password
   - First name, Last name
   - Company (optional)
4. Click **"Create your Atlas account"**
5. Verify your email if prompted

## Step 2: Create a Free Cluster

1. After logging in, you'll see the **"Deploy a cloud database"** screen
2. Select **"M0 FREE"** (Free Shared Cluster) - This is perfect for development
3. Choose a **Cloud Provider**:
   - AWS (recommended)
   - Google Cloud
   - Azure
4. Select a **Region** closest to you (e.g., `N. Virginia (us-east-1)` for US)
5. Click **"Create Deployment"** (or "Create" button)

## Step 3: Create Database User

1. You'll see a **"Create Database User"** screen
2. Choose **"Password"** authentication method
3. Enter:
   - **Username**: `sports_pwa_user` (or any username you prefer)
   - **Password**: Create a strong password (save this - you'll need it!)
   - Click **"Create User"**

**⚠️ IMPORTANT: Save your username and password! You'll need them for the connection string.**

## Step 4: Configure Network Access (IP Whitelist)

1. You'll see **"Where would you like to connect from?"** screen
2. For development, click **"Add My Current IP Address"**
3. OR click **"Allow Access from Anywhere"** (0.0.0.0/0) - **Easier for development**
4. Click **"Finish and Close"**

**Note:** If you choose "Add My Current IP Address", you may need to update it if your IP changes.

## Step 5: Get Your Connection String

1. Click **"Connect"** button on your cluster
2. Select **"Connect your application"**
3. Choose **"Node.js"** as your driver
4. Copy the connection string - it will look like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Update Your .env File

1. Open `server/.env` in your project
2. Replace the `MONGODB_URI` line with your new connection string
3. **Important:** Replace `<username>` and `<password>` with your actual database user credentials
4. Add the database name at the end: `/sports-pwa`

**Example:**
```
MONGODB_URI=mongodb+srv://sports_pwa_user:YourPassword123@cluster0.xxxxx.mongodb.net/sports-pwa?retryWrites=true&w=majority
```

## Step 7: Test the Connection

1. Restart your server: `npm run server`
2. Look for: **"✅ MongoDB connected successfully"**
3. If you see connection errors, check:
   - Username and password are correct
   - IP address is whitelisted
   - Connection string format is correct

## Troubleshooting

### Connection Timeout
- Check your IP is whitelisted in Network Access
- Try "Allow Access from Anywhere" (0.0.0.0/0) for development

### Authentication Failed
- Double-check username and password
- Make sure you replaced `<username>` and `<password>` in the connection string
- Username and password are case-sensitive

### Can't Find Cluster
- Make sure you completed the cluster creation
- Check you're in the correct project/organization

## Quick Checklist

- [ ] Created MongoDB Atlas account
- [ ] Created M0 FREE cluster
- [ ] Created database user (saved username & password)
- [ ] Whitelisted IP address (or allowed from anywhere)
- [ ] Got connection string
- [ ] Updated `server/.env` with connection string
- [ ] Replaced `<username>` and `<password>` in connection string
- [ ] Added `/sports-pwa` database name
- [ ] Restarted server and saw "MongoDB connected successfully"

