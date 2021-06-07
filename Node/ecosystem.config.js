module.exports = {
    apps: [{
        name: 'fastlane',
        script: './index.js',
        env: {
          watch: true,
          NODE_ENV: 'development'
        },
        env_production: {
          watch: false,
          instances: 4,
            exec_mode: 'cluster',
            NODE_ENV: 'production'
        }
    }]
};
