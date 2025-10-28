module.exports = {
  apps: [
    {
      name: 'seagullwebsite',
      script: 'npm',
      args: 'start',
      cwd: '/root/SeagullWebsite',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3000
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/root/logs/seagullwebsite-error.log',
      out_file: '/root/logs/seagullwebsite-out.log',
      log_file: '/root/logs/seagullwebsite.log',
      time: true
    }
  ]
};