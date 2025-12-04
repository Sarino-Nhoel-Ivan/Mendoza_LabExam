# Push Code to GitHub - Quick Guide

## ⚠️ IMPORTANT: Git Must Be Installed First

### Step 1: Install Git

1. Download Git: **https://git-scm.com/download/win**
2. Run the installer
3. Use default settings (click "Next" through all steps)
4. **Restart PowerShell** after installation

### Step 2: Push Using PowerShell Script (Easiest)

1. Open PowerShell in your project folder
2. Run:
   ```powershell
   .\push-to-github.ps1
   ```

### Step 3: Push Using Manual Commands

If the script doesn't work, run these commands one by one:

```powershell
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git

# Or update existing remote
git remote set-url origin https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git

# Add all files
git add .

# Commit
git commit -m "Complete Sports PWA application with authentication, real-time updates, and PWA features"

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Authentication

When prompted for credentials:
- **Username**: Your GitHub username (`Sarino-Nhoel-Ivan`)
- **Password**: Use a **Personal Access Token** (NOT your GitHub password)

#### How to Create Personal Access Token:

1. Go to GitHub → Click your profile → **Settings**
2. Scroll down → **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name: "LabExam Push"
6. Select scope: Check **`repo`** (full control of private repositories)
7. Click **Generate token**
8. **Copy the token immediately** (you won't see it again!)
9. Use this token as your password when pushing

## Alternative: Use GitHub Desktop

If you prefer a GUI:

1. Download: **https://desktop.github.com/**
2. Install and sign in
3. Click **File** → **Add Local Repository**
4. Select: `C:\Users\ivan\Desktop\LabExam_Mendoza`
5. Click **Publish repository**
6. Make sure repository name is: `Mendoza_LabExam`
7. Click **Publish**

## What Will Be Pushed

✅ **Will be pushed:**
- All source code (React frontend, Express backend)
- Configuration files
- Documentation files
- Package.json files

❌ **Will NOT be pushed** (protected by .gitignore):
- `server/.env` (contains your secrets)
- `node_modules/` (dependencies)
- Build files

## After Pushing

Your repository will be available at:
**https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam**

You can verify by visiting the URL and checking that all your code is there!

