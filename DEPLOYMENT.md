# Seagull Ltd Website - Deployment Guide

## Server Information
- **VPS IP**: 194.163.141.249
- **User**: root
- **Password**: 254426Ag
- **Domain**: seagull-ltd.com
- **Local Binding**: 127.0.0.1:3000 (PM2)
- **GitHub Repo**: https://github.com/tatlici/SeagullWebsite

---

## 📋 Prerequisites

Before deploying, ensure the following are installed on your VPS:

### 1. Node.js & npm
```bash
# Check if installed
node -v
npm -v

# If not installed, install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
```

### 2. Git
```bash
# Check if installed
git --version

# If not installed
apt-get update
apt-get install -y git
```

### 3. PM2
```bash
# Install PM2 globally
npm install -g pm2

# Verify installation
pm2 -v
```

### 4. Nginx (for reverse proxy)
```bash
# Check if installed
nginx -v

# If not installed
apt-get install -y nginx
```

---

## 🚀 Initial Deployment (First Time)

### Step 1: Connect to VPS
```bash
ssh root@194.163.141.249
# Enter password: 254426Ag
```

### Step 2: Clone Repository
```bash
cd /root
git clone https://github.com/tatlici/SeagullWebsite.git
cd SeagullWebsite
```

### Step 3: Upload Client Logos
Before building, make sure to upload the client logo files to the server:
```bash
# From your local machine (in a new terminal):
scp C:\Users\User\Desktop\seagullwebsite\public\clients\sehir-hatlari.png root@194.163.141.249:/root/SeagullWebsite/public/clients/
scp C:\Users\User\Desktop\seagullwebsite\public\clients\istac.png root@194.163.141.249:/root/SeagullWebsite/public/clients/

# Or use SFTP client like FileZilla/WinSCP to upload the files
```

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Build the Application
```bash
npm run build
```

### Step 6: Create Logs Directory
```bash
mkdir -p /root/logs
```

### Step 7: Start with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root
```

### Step 8: Verify Application is Running
```bash
# Check PM2 status
pm2 status

# Test local access
curl http://127.0.0.1:3000

# Check logs
pm2 logs seagullwebsite
```

---

## 🔄 Subsequent Deployments (Updates)

For all future deployments after the initial setup:

### Option 1: Using the Deployment Script (Recommended)

```bash
# SSH to server
ssh root@194.163.141.249

# Navigate to project
cd /root/SeagullWebsite

# Make script executable (first time only)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### Option 2: Manual Steps

```bash
# SSH to server
ssh root@194.163.141.249

# Navigate to project
cd /root/SeagullWebsite

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Build
npm run build

# Restart PM2
pm2 restart ecosystem.config.js

# Save PM2 configuration
pm2 save
```

---

## 🌐 Nginx Reverse Proxy Setup

To make your website accessible via the public IP and domain name:

### Step 1: Create Nginx Configuration
```bash
nano /etc/nginx/sites-available/seagull-ltd
```

### Step 2: Add Configuration
```nginx
server {
    listen 80;
    server_name 194.163.141.249 seagull-ltd.com www.seagull-ltd.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Increase buffer sizes for larger responses
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;

    # Client body size (for file uploads)
    client_max_body_size 50M;
}
```

### Step 3: Enable Site
```bash
# Create symbolic link
ln -s /etc/nginx/sites-available/seagull-ltd /etc/nginx/sites-enabled/

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
```

### Step 4: Configure Firewall (if enabled)
```bash
# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Reload firewall
ufw reload
```

---

## 🔒 SSL Certificate Setup (Optional but Recommended)

To enable HTTPS with Let's Encrypt:

### Step 1: Install Certbot
```bash
apt-get install -y certbot python3-certbot-nginx
```

### Step 2: Obtain SSL Certificate
```bash
certbot --nginx -d seagull-ltd.com -d www.seagull-ltd.com
```

### Step 3: Auto-renewal (certbot sets this up automatically)
```bash
# Test renewal
certbot renew --dry-run
```

---

## 📊 Monitoring & Management

### PM2 Commands
```bash
# Check status
pm2 status

# View logs
pm2 logs seagullwebsite

# View real-time logs
pm2 logs seagullwebsite --lines 100

# Monitor resources
pm2 monit

# Restart application
pm2 restart seagullwebsite

# Stop application
pm2 stop seagullwebsite

# Delete from PM2
pm2 delete seagullwebsite
```

### Nginx Commands
```bash
# Check status
systemctl status nginx

# Restart
systemctl restart nginx

# Reload configuration
systemctl reload nginx

# View logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

---

## 🔧 Troubleshooting

### Issue: PM2 process not starting
```bash
# Check PM2 logs
pm2 logs seagullwebsite --err

# Check if port 3000 is in use
netstat -tulpn | grep 3000

# Kill process using port 3000 (if needed)
kill -9 $(lsof -t -i:3000)
```

### Issue: Build fails
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Website not accessible
```bash
# Check if PM2 is running
pm2 status

# Check if Nginx is running
systemctl status nginx

# Check Nginx configuration
nginx -t

# Check firewall
ufw status
```

### Issue: Out of memory during build
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📁 Important File Locations

- **Project Directory**: `/root/SeagullWebsite`
- **PM2 Logs**: `/root/logs/seagullwebsite-out.log` and `/root/logs/seagullwebsite-error.log`
- **Nginx Config**: `/etc/nginx/sites-available/seagull-ltd`
- **Nginx Logs**: `/var/log/nginx/`
- **PM2 Config**: `/root/SeagullWebsite/ecosystem.config.js`

---

## 🔄 Updating Client Logos or Assets

```bash
# SSH to server
ssh root@194.163.141.249

# Navigate to assets directory
cd /root/SeagullWebsite/public/clients

# Upload new files (from local machine in new terminal)
scp new-logo.png root@194.163.141.249:/root/SeagullWebsite/public/clients/

# No need to rebuild or restart - static assets are served directly
```

---

## 📞 Quick Reference

| Action | Command |
|--------|---------|
| Deploy updates | `cd /root/SeagullWebsite && ./deploy.sh` |
| View logs | `pm2 logs seagullwebsite` |
| Restart app | `pm2 restart seagullwebsite` |
| Check status | `pm2 status` |
| Restart Nginx | `systemctl restart nginx` |
| View build | `curl http://127.0.0.1:3000` |

---

## ✅ Post-Deployment Checklist

- [ ] Website accessible at http://194.163.141.249
- [ ] Website accessible at http://seagull-ltd.com (if domain configured)
- [ ] All pages load correctly (Home, Cookies, Privacy, Terms)
- [ ] Language switcher works (EN/TR/DE)
- [ ] Dark mode toggle works
- [ ] Contact form sends emails to info@seagull-ltd.com
- [ ] Client logos display correctly
- [ ] ISO certificate PDF opens
- [ ] Cookie consent popup appears
- [ ] Mobile responsive design works
- [ ] PM2 process is saved and will restart on reboot

---

## 🆘 Emergency Rollback

If deployment breaks the site:

```bash
# Check last working commit
git log --oneline -n 5

# Rollback to previous commit (replace COMMIT_HASH)
git reset --hard COMMIT_HASH

# Rebuild
npm install
npm run build

# Restart PM2
pm2 restart seagullwebsite
```

---

## 📝 Notes

1. The application runs on **127.0.0.1:3000** for security (not exposed to public)
2. Nginx acts as a reverse proxy to forward public traffic to the app
3. PM2 ensures the app automatically restarts if it crashes
4. PM2 startup script ensures the app starts on server reboot
5. The deployment script preserves uploaded logos during updates
6. Build artifacts are in the `.next` folder and are regenerated on each deployment

---

For questions or issues, contact the development team or refer to the Next.js documentation: https://nextjs.org/docs
