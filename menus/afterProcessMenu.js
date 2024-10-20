const { InlineKeyboard } = require("grammy");

const returnMenu = new InlineKeyboard()
                            .text("Головне меню", "mainmenu");

const notAutorizMenu = new InlineKeyboard()
                            .text("Подати запит на авторизацію", "request");

module.exports = { returnMenu, notAutorizMenu };