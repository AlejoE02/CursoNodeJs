const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://user:user1234@telegrom-3zdx7.mongodb.net/test?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;