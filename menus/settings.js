const { Menu } = require("@grammyjs/menu");
const { showRequestAuthList } = require("../callbacks/requestNewUser");

const acceptParameters = require("./acceptParameters");

const settings = new Menu("settings")
                .text("Запити на авторизацію", showRequestAuthList)
                .row()
                .submenu("Параметри доступу", "acceptParameters")
                .back("<< Назад");

settings.register(acceptParameters);


module.exports = settings;