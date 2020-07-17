module.exports = {
    apps: [{
        name: 'gitbook',
        script: 'server.js',
        env: {
            PORT: 4000,
            log_date_format: "YYYY-MM-DD HH:mm Z"
        }
    }]
};