<<<<<<< HEAD
# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **Create a new project** (or select an existing one):
   - Click the project dropdown at the top
   - Click "New Project"
   - Enter project name: "Sports PWA" (or any name)
   - Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google+ API"** or **"Google Identity API"**
3. Click on it and click **"Enable"**

## Step 3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace account)
3. Click **"Create"**
4. Fill in the required information:
   - **App name**: Sports Task Manager (or any name)
   - **User support email**: Your email
   - **Developer contact information**: Your email
5. Click **"Save and Continue"**
6. On **"Scopes"** page, click **"Save and Continue"**
7. On **"Test users"** page (if external), you can add test users or skip
8. Click **"Save and Continue"** and then **"Back to Dashboard"**

## Step 4: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Select **"Web application"** as the application type
4. Give it a name: "Sports PWA Client" (or any name)
5. **Authorized JavaScript origins**:
   - Add: `http://localhost:5000`
6. **Authorized redirect URIs**:
   - Add: `http://localhost:5000/api/auth/google/callback`
7. Click **"Create"**

## Step 5: Copy Your Credentials

After creating, you'll see a popup with:
- **Client ID**: Copy this
- **Client Secret**: Copy this (click "Show" if hidden)

## Step 6: Update Your .env File

1. Open `server/.env`
2. Update these lines:
   ```
   GOOGLE_CLIENT_ID=your-client-id-here
   GOOGLE_CLIENT_SECRET=your-client-secret-here
   ```

**Example:**
```
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

## Step 7: Restart Your Server

1. Stop your server (Ctrl+C)
2. Start it again: `npm run server`
3. The Google OAuth should now work!

## Testing Google OAuth

1. Go to http://localhost:3000/login
2. Click **"Continue with Google"**
3. You should be redirected to Google's login page
4. After logging in, you'll be redirected back to the app

## Troubleshooting

### "Error 400: redirect_uri_mismatch"
- Make sure the redirect URI in Google Console exactly matches: `http://localhost:5000/api/auth/google/callback`
- Check for typos, trailing slashes, or http vs https

### "Access blocked: This app's request is invalid"
- Make sure you've completed the OAuth consent screen setup
- If using "External" app type, you may need to add test users

### "Invalid client"
- Double-check your Client ID and Client Secret in `server/.env`
- Make sure there are no extra spaces or quotes

### OAuth works but user not created
- Check your MongoDB connection
- Check server logs for errors
- Verify the callback URL is correct

## Production Setup

For production, you'll need to:
1. Add your production domain to Authorized JavaScript origins
2. Add production callback URL to Authorized redirect URIs
3. Update `CLIENT_URL` in `.env` to your production URL
4. Consider publishing your OAuth app (if using External type)


=======
# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **Create a new project** (or select an existing one):
   - Click the project dropdown at the top
   - Click "New Project"
   - Enter project name: "Sports PWA" (or any name)
   - Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google+ API"** or **"Google Identity API"**
3. Click on it and click **"Enable"**

## Step 3: Configure OAuth Consent Screen

1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** (unless you have a Google Workspace account)
3. Click **"Create"**
4. Fill in the required information:
   - **App name**: Sports Task Manager (or any name)
   - **User support email**: Your email
   - **Developer contact information**: Your email
5. Click **"Save and Continue"**
6. On **"Scopes"** page, click **"Save and Continue"**
7. On **"Test users"** page (if external), you can add test users or skip
8. Click **"Save and Continue"** and then **"Back to Dashboard"**

## Step 4: Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Select **"Web application"** as the application type
4. Give it a name: "Sports PWA Client" (or any name)
5. **Authorized JavaScript origins**:
   - Add: `http://localhost:5000`
6. **Authorized redirect URIs**:
   - Add: `http://localhost:5000/api/auth/google/callback`
7. Click **"Create"**

## Step 5: Copy Your Credentials

After creating, you'll see a popup with:
- **Client ID**: Copy this
- **Client Secret**: Copy this (click "Show" if hidden)

## Step 6: Update Your .env File

1. Open `server/.env`
2. Update these lines:
   ```
   GOOGLE_CLIENT_ID=your-client-id-here
   GOOGLE_CLIENT_SECRET=your-client-secret-here
   ```

**Example:**
```
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

## Step 7: Restart Your Server

1. Stop your server (Ctrl+C)
2. Start it again: `npm run server`
3. The Google OAuth should now work!

## Testing Google OAuth

1. Go to http://localhost:3000/login
2. Click **"Continue with Google"**
3. You should be redirected to Google's login page
4. After logging in, you'll be redirected back to the app

## Troubleshooting

### "Error 400: redirect_uri_mismatch"
- Make sure the redirect URI in Google Console exactly matches: `http://localhost:5000/api/auth/google/callback`
- Check for typos, trailing slashes, or http vs https

### "Access blocked: This app's request is invalid"
- Make sure you've completed the OAuth consent screen setup
- If using "External" app type, you may need to add test users

### "Invalid client"
- Double-check your Client ID and Client Secret in `server/.env`
- Make sure there are no extra spaces or quotes

### OAuth works but user not created
- Check your MongoDB connection
- Check server logs for errors
- Verify the callback URL is correct

## Production Setup

For production, you'll need to:
1. Add your production domain to Authorized JavaScript origins
2. Add production callback URL to Authorized redirect URIs
3. Update `CLIENT_URL` in `.env` to your production URL
4. Consider publishing your OAuth app (if using External type)


>>>>>>> 59cce31e39b989aab54997d7bea6196f868bc9dd
