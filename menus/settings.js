const { Menu } = require("@grammyjs/menu");
const { InlineKeyboard } = require("grammy");
const { getRequestAuth } = require("../modules/db");
const newUser = require("../models/newUser");

const settings = new Menu("settings")
                .text("Запити на авторизацію", showRequestAuthList)
                .back("<< Назад");

async function showRequestAuthList(ctx) {
    req = await getRequestAuth(newUser);

    if (req) {
        for (let i = 0; i < req.length; i++) {
            const requestListMenu = new InlineKeyboard()
                .text("Прийняти", "take-newUser")
                .text("Видалити", "reject-newUser");


            if (i === req.length - 1) requestListMenu.row().text("Головне меню", "mainmenu");

            const replyStr = 
`id: ${req[i].userId}
Ім'я: ${req[i].firstName}
Прізвище: ${req[i].lastName}
Запит прийшов із чату: ${req[i].chatId}`;
            await ctx.reply(replyStr, { reply_markup: requestListMenu });
        }
    } else {
        console.log(undefined);
    }
}

module.exports = settings;