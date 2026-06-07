module.exports = {
  apps: [
    {
      name: "ironslash-contact-api",
      script: "server/index.mjs",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      max_memory_restart: "128M",
      env: {
        NODE_ENV: "production",
        PORT: 3921,
      },
    },
  ],
};
