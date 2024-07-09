const mongoose = require("mongoose");

// Making Schema (Logical design) of collection User 
const UsersSchema = new mongoose.Schema({
    fn: {
        type: String,
        require: true
    },
    ln: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

// making model for this schema

const user = mongoose.model("Users", UsersSchema);

module.exports = { user };