const { Menu } = require("@grammyjs/menu");
const { showUsersList } = require("../callbacks/accessControl");
const acceptParameters = new Menu("acceptParameters")
                        .text("Показати групу admin", (ctx) => { showUsersList(ctx, "admin") }).row()
                        .text("Показати групу moderator", (ctx) => { showUsersList(ctx, "moderator") }).row()
                        .text("Показати групу user", (ctx) => { showUsersList(ctx, "user") }).row()
                        .text("Показати усіх користувачів", (ctx) => { showUsersList(ctx) }).row()
                        .back("<< Назад");



module.exports = acceptParameters;