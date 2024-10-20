const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    user: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        required: true
    }
});

const Users = mongoose.model("users", User);

module.exports = Users;