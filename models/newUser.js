const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    chatId: {
        type: Number,
        required: true
    },
    messageId: {
        type: Number,
        required: true
    }
});

const newUser = mongoose.model("new-user", newUserSchema);

module.exports = newUser;