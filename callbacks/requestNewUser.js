const { returnMenu }  = require("../menus/afterProcessMenu");
const newUser = require("../models/newUser");
const { InlineKeyboard } = require("grammy");
const { getAllUsers } = require("../modules/db");
const { setData, getData } = require("../globalData");
const bot = require("../bot");

async function requestAutorization(model, ctx) {
    try {
      const { first_name, last_name, id } = ctx.callbackQuery.from;
      const chatId = ctx.callbackQuery.message.chat.id;
      const messageId = ctx.callbackQuery.message.message_id;
      
  
      const resFindInDB = await model.findOne( { userId: id } );
  
      if (resFindInDB === null) {
        const user = new model({userId: id, 
                                  firstName: first_name || "undefined", 
                                  lastName: last_name || "undefined", 
                                  chatId: chatId,
                                  messageId: messageId
                                });
        await user.save()
                     .then(() => {
                        ctx.reply("Запит на автооризацію поданий. Очікуйте відповіді!");
                     })
                     .catch((err) => console.log(err));
      } else {
        ctx.reply("Ви вже подали запит на авторизацію. Очікуйте!");
      }
    } catch (err) {
      console.log("Error saved in DB:", err);
    }
}

async function acceptNewUser(bot, model, ctx, id) {
    const userInfo = getData("requestUsers").filter(item => item.userId === Number(id))[0];
    
    try {
      const resFindInDB = await model.findOne( { user: userInfo.userId } );
  
      if (!resFindInDB){
      const user = new model({user: Number(id), firstName: userInfo.firstName, lastName: userInfo.lastName, mode: "user"});
      await user.save().then(() => {
                                      ctx.reply(`Користувача ${userInfo.userId} авторизовано`, {reply_markup: returnMenu});
                                      bot.api.sendMessage(userInfo.chatId, "Вас авторизовано!", {reply_to_message_id: userInfo.messageId});
                                      newUser.deleteOne({userId: userInfo.userId})
                                                        .then(() => console.log("Користувача авторизовано та видалено з бази нових користувачів!"))
                                                        .catch((err) => console.log(err));
                                   }).catch((err) => console.log(err));
      } else {
        await ctx.reply("Користувач вже авторизований");
      }
    } catch (err) {
      console.log(err); 
    }
}

async function rejectNewUser(model, ctx, id) {
  
  try {
    await model.deleteOne({userId: Number(id)}).then(() => ctx.reply(`Користувача ${res} видалено`)).catch((err) => console.log(err));
    
  } catch (err) {
    console.log(err); 
  }
}

async function showRequestAuthList(ctx) {
  setData("requestUsers", await getAllUsers(newUser));
  const req = getData("requestUsers");
  
 if (req) {
     for (let i = 0; i < req.length; i++) {
         const requestListMenu = new InlineKeyboard()
             .text("Прийняти", `accept-${req[i].userId}`)
             .text("Видалити", `reject-${req[i].userId}`);


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
     await ctx.reply("Відсутні заявки на авторизацію", { reply_markup: returnMenu });
 }
} 

module.exports = { requestAutorization, acceptNewUser, rejectNewUser, showRequestAuthList };