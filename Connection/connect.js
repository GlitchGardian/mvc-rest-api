const mongoose = require("mongoose");

async function ConnectDb(url) {
    return mongoose.connect(url)
}

module.exports = { ConnectDb };