# Push to GitHub Repository

## Option 1: Using Git Command Line (Recommended)

### Step 1: Install Git (if not installed)
1. Download Git from: https://git-scm.com/download/win
2. Install it with default settings
3. Restart your terminal/PowerShell

### Step 2: Initialize Git Repository

Open PowerShell in your project folder and run:

```bash
# Initialize git repository
git init

# Add remote repository
git remote add origin https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git

# Check status
git status
```

### Step 3: Add and Commit Files

```bash
# Add all files (except those in .gitignore)
git add .

# Commit with a message
git commit -m "Initial commit: Sports PWA with authentication and real-time features"

# Check what will be pushed
git status
```

### Step 4: Push to GitHub

```bash
# Push to main branch
git branch -M main
git push -u origin main
```

If prompted for credentials:
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your GitHub password)
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with `repo` permissions
  - Use that token as password

## Option 2: Using GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your project folder: `C:\Users\ivan\Desktop\LabExam_Mendoza`
5. Click "Publish repository"
6. Repository name: `Mendoza_LabExam`
7. Make sure "Keep this code private" is unchecked (or checked if you want it private)
8. Click "Publish repository"

## Option 3: Using VS Code

1. Open VS Code in your project folder
2. Click the Source Control icon (left sidebar)
3. Click "Initialize Repository"
4. Click "..." → "Remote" → "Add Remote"
5. Name: `origin`
6. URL: `https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git`
7. Stage all changes (click + next to "Changes")
8. Enter commit message: "Initial commit: Sports PWA"
9. Click "Commit"
10. Click "..." → "Push" → "Push to..."

## Important Notes

✅ **Files that will NOT be pushed** (protected by .gitignore):
- `server/.env` (contains your MongoDB password and secrets)
- `node_modules/` (dependencies)
- `client/build/` (build files)

✅ **Files that WILL be pushed**:
- All source code
- `server/env.example` (example environment file)
- `package.json` files
- Documentation files

## After Pushing

Your repository will contain:
- ✅ Full-stack application code
- ✅ React frontend
- ✅ Express backend
- ✅ MongoDB models and routes
- ✅ Authentication setup
- ✅ PWA configuration
- ✅ Documentation

**Remember:** Never commit `.env` files with real passwords/secrets!


