const { returnMenu }  = require("../menus/afterProcessMenu");
const newUser = require("../models/newUser");

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
                     .then(() => ctx.reply("Запит на автооризацію поданий. Очікуйте відповіді!"))
                     .catch((err) => console.log(err));
      } else {
        ctx.reply("Ви вже подали запит на авторизацію. Очікуйте!");
      }
    } catch (err) {
      console.log("Error saved in DB:", err);
    }
}

async function acceptNewUser(bot, model, ctx) {
    const res = ctx.callbackQuery.message.text.match(/id: (.*)/);
    const userInfo = req.filter(item => item.userId === Number(res[1]))[0];
    
    try {
      const resFindInDB = await model.findOne( { user: userInfo.userId } );
  
      if (!resFindInDB){
      const user = new model({user: Number(res[1]), mode: "user"});
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

async function rejectNewUser(model, ctx) {
  const res = ctx.callbackQuery.message.text.match(/id: (.*)/);
  
  try {
    await model.deleteOne({userId: Number(res[1])}).then(() => ctx.reply(`Користувача ${res} видалено`)).catch((err) => console.log(err));
    
  } catch (err) {
    console.log(err); 
  }
}

module.exports = { requestAutorization, acceptNewUser, rejectNewUser };