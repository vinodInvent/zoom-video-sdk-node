
module.exports = {
    apps: [
      {
        name: "zoom-video-sdk", // Application name
        script: "npm",       // Command to run
        args: "start",       // Arguments for the script
        env: {
          NODE_ENV: "development", // Environment for development
        },
        env_production: {
          NODE_ENV: "production", // Environment for production
        },
      },
    ],
  };

  
