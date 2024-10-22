const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    user: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    }
});

const Users = mongoose.model("users", User);

module.exports = Users;