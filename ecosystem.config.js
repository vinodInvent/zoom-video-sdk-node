module.exports = {
    apps: [
      {
        name: "zoom-video-sdk",           // Name of your app
        script: "npm",                // Command to run (using npm)
        args: "start",              // Arguments for the command
        env: {
          PORT: 8900,                 // Custom port
          NODE_ENV: "development"     // Set environment (e.g., development or production)
        },
        watch: true                   // Optional: Automatically restart on file changes
      }
    ]
  };
  