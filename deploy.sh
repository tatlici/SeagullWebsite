#!/bin/bash
# Seagull Ltd Website Deployment Script with PM2

echo "🚀 Deploying Seagull Ltd website to seagull-ltd.com..."

# Navigate to project
echo "📂 Step 1: Navigating to project directory..."
cd /root/SeagullWebsite || {
  echo "❌ Failed to navigate to project directory"
  exit 1
}
echo "✅ Successfully navigated to project directory"

# BACKUP uploaded assets before git pull
echo "📁 Step 2: Backing up uploaded assets..."
mkdir -p /tmp/seagull_backup
if cp -r public/clients/* /tmp/seagull_backup/ 2>/dev/null; then
  echo "✅ Asset backup completed"
else
  echo "⚠️  No existing assets to backup or backup failed (continuing...)"
fi

# Pull latest code
echo "🔄 Step 3: Pulling latest code from git..."
if ! git pull origin main; then
  echo "❌ Git pull failed! Aborting deployment to prevent overwriting local changes."
  echo "💡 Please resolve git conflicts manually or stash changes before deploying."
  exit 1
fi
echo "✅ Git pull completed successfully"

# Install dependencies
echo "📦 Step 4: Installing dependencies..."
if ! npm install; then
  echo "❌ npm install failed!"
  exit 1
fi
echo "✅ Dependencies installed successfully"

# Build
echo "🔨 Step 5: Building the application..."
if ! npm run build; then
  echo "❌ Build failed!"
  exit 1
fi
echo "✅ Build completed successfully"

# RESTORE uploaded assets after build
echo "📁 Step 6: Restoring uploaded assets..."
mkdir -p public/clients
if cp -r /tmp/seagull_backup/* public/clients/ 2>/dev/null; then
  echo "✅ Assets restored successfully"
else
  echo "⚠️  No assets to restore or restore failed (continuing...)"
fi
rm -rf /tmp/seagull_backup

# Use full path to PM2 (adjust if your path is different)
echo "⚙️  Step 7: Configuring PM2..."
PM2_PATH=$(which pm2 2>/dev/null || echo "/usr/local/bin/pm2")
echo "📍 Using PM2 path: $PM2_PATH"

# Check if PM2 process exists and restart or start
if $PM2_PATH list | grep -q "seagullwebsite"; then
  echo "🔄 Step 8: Restarting existing PM2 process..."
  if ! $PM2_PATH restart ecosystem.config.js; then
    echo "❌ PM2 restart failed!"
    exit 1
  fi
  echo "✅ PM2 process restarted successfully"
else
  echo "🚀 Step 8: Starting new PM2 process..."
  if ! $PM2_PATH start ecosystem.config.js; then
    echo "❌ PM2 start failed!"
    exit 1
  fi
  echo "✅ PM2 process started successfully"
fi

# Save PM2 process list
echo "💾 Step 9: Saving PM2 process list..."
if ! $PM2_PATH save; then
  echo "❌ PM2 save failed!"
  exit 1
fi
echo "✅ PM2 process list saved successfully"

# Setup PM2 startup (only needs to be done once, but safe to run multiple times)
echo "🔧 Step 10: Setting up PM2 startup script..."
$PM2_PATH startup systemd -u root --hp /root 2>/dev/null || echo "⚠️  PM2 startup already configured"

echo "✅ Deployment complete!"
echo "🌐 Your website should now be running at http://127.0.0.1:3000"
echo "💡 Configure Nginx reverse proxy to make it accessible via seagull-ltd.com"
