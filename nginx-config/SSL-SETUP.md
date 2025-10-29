# SSL Certificate Setup for seagull-ltd.com

## 🔒 Option 1: Free SSL with Let's Encrypt (Recommended)

### Prerequisites
- Domain must be pointing to your server IP (194.163.141.249)
- Port 80 must be open
- Nginx must be running

### Step 1: Install Certbot
```bash
# SSH to server
ssh root@194.163.141.249

# Install certbot and nginx plugin
apt-get update
apt-get install -y certbot python3-certbot-nginx

# Or if you're on CentOS/RHEL
# yum install -y certbot python3-certbot-nginx
```

### Step 2: Obtain SSL Certificate
```bash
# Automatic installation (certbot will modify nginx config)
certbot --nginx -d seagull-ltd.com -d www.seagull-ltd.com

# Or manual installation (you update config yourself)
certbot certonly --nginx -d seagull-ltd.com -d www.seagull-ltd.com
```

### Step 3: Certificate Locations
After successful installation, certificates will be at:
- **Certificate**: `/etc/letsencrypt/live/seagull-ltd.com/fullchain.pem`
- **Private Key**: `/etc/letsencrypt/live/seagull-ltd.com/privkey.pem`

### Step 4: Update Nginx Config
```bash
# Navigate to nginx config
cd /etc/nginx/sites-available/

# Edit your config file
nano seagull-ltd

# Replace the HTTP server block with the enhanced config provided
# Update SSL certificate paths to:
# ssl_certificate /etc/letsencrypt/live/seagull-ltd.com/fullchain.pem;
# ssl_certificate_key /etc/letsencrypt/live/seagull-ltd.com/privkey.pem;

# Test nginx config
nginx -t

# Reload nginx
systemctl reload nginx
```

### Step 5: Auto-Renewal Setup
```bash
# Test renewal process
certbot renew --dry-run

# Certbot automatically sets up a cron job/systemd timer for renewal
# Verify it's set up:
systemctl status certbot.timer

# Or check cron:
crontab -l | grep certbot
```

---

## 🔒 Option 2: Using aaPanel/BT Panel (If Installed)

If you're using aaPanel or BT Panel on your server:

### Step 1: Access Panel
1. Navigate to your aaPanel: `http://194.163.141.249:7800` (or your panel port)
2. Login with your credentials

### Step 2: SSL Installation via Panel
1. Go to **Website** section
2. Find **seagull-ltd.com**
3. Click **SSL** tab
4. Choose **Let's Encrypt**
5. Enter domains: `seagull-ltd.com` and `www.seagull-ltd.com`
6. Click **Apply**

The panel will automatically:
- Obtain SSL certificate
- Update nginx configuration
- Set up auto-renewal

---

## 🔒 Option 3: Manual SSL (If You Have Your Own Certificate)

If you purchased an SSL certificate from a provider (GoDaddy, Namecheap, etc.):

### Step 1: Upload Certificate Files
```bash
# Create directory for certificates
mkdir -p /etc/nginx/ssl/seagull-ltd.com

# Upload your certificate files (from local machine):
scp yourdomain.crt root@194.163.141.249:/etc/nginx/ssl/seagull-ltd.com/
scp yourdomain.key root@194.163.141.249:/etc/nginx/ssl/seagull-ltd.com/
scp ca_bundle.crt root@194.163.141.249:/etc/nginx/ssl/seagull-ltd.com/

# Set proper permissions
chmod 600 /etc/nginx/ssl/seagull-ltd.com/*.key
chmod 644 /etc/nginx/ssl/seagull-ltd.com/*.crt
```

### Step 2: Update Nginx Config
Update SSL certificate paths in your nginx config:
```nginx
ssl_certificate /etc/nginx/ssl/seagull-ltd.com/yourdomain.crt;
ssl_certificate_key /etc/nginx/ssl/seagull-ltd.com/yourdomain.key;
```

---

## 📝 Complete Enhanced Nginx Configuration

Once SSL is obtained, replace your current config with:

```nginx
# Force HTTPS redirect
server {
    listen 80;
    server_name seagull-ltd.com www.seagull-ltd.com;
    
    # Allow Let's Encrypt ACME challenges
    location ~ \.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }
    
    # Redirect all HTTP traffic to HTTPS
    return 301 https://seagull-ltd.com$request_uri;
}

# Main HTTPS server
server {
    listen 443 ssl http2;
    server_name seagull-ltd.com www.seagull-ltd.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/seagull-ltd.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/seagull-ltd.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_tickets on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000" always;

    # Error pages
    error_page 404 /404.html;
    error_page 502 /502.html;

    # Next.js application proxy
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
        proxy_read_timeout 86400;
        
        # NUCLEAR cache-busting for HTML pages
        add_header Cache-Control "no-cache, no-store, must-revalidate, max-age=0";
        add_header Pragma "no-cache";
        add_header Expires "0";
        add_header X-Accel-Expires "0";
        proxy_no_cache 1;
        proxy_cache_bypass 1;
    }

    # Static assets optimization
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    # Forbidden files
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn|\.project|LICENSE|README.md|\.next|node_modules) {
        return 404;
    }

    # SSL certificate verification
    location ~ \.well-known {
        allow all;
    }

    # Optimized static files
    location ~* \.(ico|css|js|gif|jpe?g|png|svg|woff|woff2|ttf|eot|pdf)$ {
        proxy_pass http://127.0.0.1:3000;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
        access_log off;
    }

    client_max_body_size 50M;

    access_log /var/log/nginx/seagull-ltd.access.log;
    error_log /var/log/nginx/seagull-ltd.error.log;
}
```

---

## ✅ After SSL Installation Checklist

1. **Test HTTPS Access**
   ```bash
   curl -I https://seagull-ltd.com
   ```

2. **Verify SSL Grade**
   - Visit: https://www.ssllabs.com/ssltest/
   - Enter: seagull-ltd.com
   - Should get A or A+ rating

3. **Check Auto-Renewal**
   ```bash
   certbot renew --dry-run
   ```

4. **Update Your Code** (if needed)
   - Most apps detect HTTPS automatically via `X-Forwarded-Proto` header
   - Your Next.js app is already configured correctly

5. **Test All Features**
   - [ ] Homepage loads on HTTPS
   - [ ] All pages accessible
   - [ ] No mixed content warnings
   - [ ] Cookie consent works
   - [ ] Contact form works
   - [ ] All assets load (images, logos, PDFs)

---

## 🔧 Troubleshooting

### Issue: Certificate not issued
```bash
# Check DNS is pointing to your server
dig seagull-ltd.com

# Ensure port 80 is open
netstat -tulpn | grep :80

# Check nginx is running
systemctl status nginx
```

### Issue: Mixed content warnings
- Update your app to use relative URLs or HTTPS URLs
- Check for hardcoded HTTP links

### Issue: Renewal fails
```bash
# Check certbot logs
cat /var/log/letsencrypt/letsencrypt.log

# Manually renew
certbot renew --force-renewal
```

---

## 📞 Quick Commands Reference

```bash
# Install SSL
certbot --nginx -d seagull-ltd.com -d www.seagull-ltd.com

# Test renewal
certbot renew --dry-run

# Force renewal (if needed)
certbot renew --force-renewal

# Check certificate expiry
openssl x509 -in /etc/letsencrypt/live/seagull-ltd.com/cert.pem -noout -dates

# Reload nginx after config changes
nginx -t && systemctl reload nginx
```

---

**Recommendation**: Use Option 1 (Let's Encrypt) - it's free, automatic, and trusted by all browsers.
