# PowerShell script to push code to GitHub
# Run this script after installing Git

Write-Host "🚀 Pushing code to GitHub..." -ForegroundColor Green
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit 1
}

# Initialize git if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Cyan
    git init
}

# Add remote if not exists
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "🔗 Adding remote repository..." -ForegroundColor Cyan
    git remote add origin https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git
} else {
    Write-Host "✅ Remote 'origin' already exists" -ForegroundColor Green
    Write-Host "Updating remote URL..." -ForegroundColor Cyan
    git remote set-url origin https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam.git
}

# Add all files
Write-Host "📝 Adding all files..." -ForegroundColor Cyan
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 Committing changes..." -ForegroundColor Cyan
    git commit -m "Complete Sports PWA application with authentication, real-time updates, and PWA features"
    
    # Set main branch
    Write-Host "🌿 Setting main branch..." -ForegroundColor Cyan
    git branch -M main
    
    # Push to GitHub
    Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
    Write-Host "You may be prompted for GitHub credentials." -ForegroundColor Yellow
    Write-Host "Use a Personal Access Token as password (not your GitHub password)" -ForegroundColor Yellow
    Write-Host ""
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "Repository: https://github.com/Sarino-Nhoel-Ivan/Mendoza_LabExam" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. Check your credentials and try again." -ForegroundColor Red
    }
} else {
    Write-Host "ℹ️  No changes to commit. Everything is up to date." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green



