const db = require('mongoose');

db.Promise = global.Promise;
// mongodb+srv://user:user1234@telegrom-3zdx7.mongodb.net/test?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('[db] Conectada con exito');
}

module.exports = connect;