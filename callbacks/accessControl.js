const { InlineKeyboard } = require("grammy");
const { getFilterUsersFromDB, updateDataInDB, deleteDataFromDB } = require("../modules/db");
const Users = require("../models/user");
const { setData, getData } = require("../globalData");
const { returnMenu } = require("../menus/afterProcessMenu");
const bot = require("../bot");

async function showUsersList(ctx, filter = "") {
    console.log(bot);
    
    const users = await getFilterUsersFromDB(Users, filter);
    setData("users", users);
    if (users && users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            const actionsMenu = new InlineKeyboard()
                                .text("Змінити роль користувача", `editMode-${users[i].user}`).row()
                                .text("Видалити користувача", `deleteUser-${users[i].user}`).row();

            if (i === users.length - 1) actionsMenu.row().text("Головне меню", "mainmenu");

            const textMsg = `
id: ${users[i].user}
Ім'я: ${users[i].firstName}
Прізвище: ${users[i].lastName}
Роль: ${users[i].mode}`;

            await ctx.reply(textMsg, {reply_markup: actionsMenu});
        }
    }
} 

async function showEditModeMenu(ctx, id) {
    const user = await getData("users").filter(user => user.user === +id)[0];                          
    

    const inlineBtn = [{text: "Адмін", id: `setAdmin-${id}`, mode: "admin"}, {text: "Модератор", id: `setModerator-${id}`, mode: "moderator"}, {text: "Користувач", id: `setUser-${id}`, mode: "user"}];

    const selModeMenu = new InlineKeyboard();
    
    inlineBtn.forEach(item => {
        if (user.mode !== item.mode) {
            selModeMenu.text(item.text, item.id).row();
        }
    });
                        
    await ctx.reply("Оберіть нову роль для користувача:", { reply_markup: selModeMenu });
}

async function editUserMode(ctx, id, mode) {
    const res = await updateDataInDB(Users, { user: +id }, { mode: mode });

    if (res) {
        console.log("Дані успішно змінено!");
        await ctx.reply("Роль користувача успішно змінена!", { reply_markup: returnMenu});
        try {
            bot.api.sendMessage(+id, "Вам надано нові права доступу!");
        } catch (err) {
            console.log("Користувач не починав діалог з ботом!" + err);
        }

    } else {
        console.log("Дані не змінено!");
    }
}

async function deleteUser(ctx, id) {
    const res = await deleteDataFromDB(Users, { user: +id });
    
    if (res) {
        await ctx.reply("Користувач видалений!", { reply_markup: returnMenu });
    }
}

module.exports = { showEditModeMenu, editUserMode, showUsersList, deleteUser };