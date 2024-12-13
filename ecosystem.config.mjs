export default {
    apps: [
      {
        name: "zoom-video-sdk-1", // Application name
        script: "npm",                         // Run the npm command
        args: "start",                         // Use the "start" script defined in package.json
        env: {
          NODE_ENV: "development",            // Development environment
        },
        env_production: {
          NODE_ENV: "production",             // Production environment
        },
      },
    ],
  };
  