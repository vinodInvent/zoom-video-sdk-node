module.exports = {
    apps: [
        {
            name: "zoom-video-sdk-1", // Application name
            script: "npm",                         // Use npm command
            args: "start",                         // Run the "start" script in package.json
            env: {
                NODE_ENV: "development",             // Development environment
            },
            env_production: {
                NODE_ENV: "production",              // Production environment
            },
        },
    ],
};
