require('dotenv').config();

const { Bot, session, InputFile, InlineKeyboard } = require("grammy");
const { Menu } = require("@grammyjs/menu");
const { hydrate } = require("@grammyjs/hydrate");
const { conversations, createConversation } = require("@grammyjs/conversations");
const mainMenu = require("./menus/mainMenu");
const fullpurchase = require("./conversation/fullpurchase");

const { requestAutorization, acceptNewUser, rejectNewUser } = require("./modules/userActions");

const { returnMenu, notAutorizMenu }  = require("./menus/afterProcessMenu");

//functions DB
const mongoose = require("mongoose");
const { saveUpdateDataToDB, getDataFromDB, getUserFromDB, getRequestAuth } = require("./modules/db");

//Models
const Product = require("./models/products");
const Users = require("./models/user");
const newUser = require('./models/newUser');

// const productsFullList = require("./products-list");
let req = [];  
const db = process.env.DB_LINK_KEY;
const bot = new Bot(process.env.BOT_API_KEY);


mongoose
  .connect(db)  
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

let products = [];


bot.api.setMyCommands([
    {
        command: "start",
        description: "початок роботи з ботом"
    }
]);

// APPEND NEW USE IN BOT
bot.use(session({
    initial() {
      return {};
    },
}));
bot.use(hydrate());
bot.use(conversations());
bot.use(createConversation(fullpurchase));
bot.use(mainMenu);

// COMMANDS

bot.command("start", async (ctx) => {
  const isUser = await getUserFromDB(Users, ctx.message.from.id);

  if (isUser) {
    mainScreen(ctx);
  } else {
    await ctx.reply("Ти не є працівником Лап'єц", { reply_markup: notAutorizMenu});
  }
});

bot.on("callback_query:data", async (ctx) => {
  await ctx.answerCallbackQuery();

  if (ctx.callbackQuery.data === "mainmenu") {
    mainScreen(ctx);
  }
  if (ctx.callbackQuery.data === "request") {
    requestAutorization(newUser, ctx);
  }
  if (ctx.callbackQuery.data == "take-newUser") {
    acceptNewUser(bot, Users, ctx);
  }
  if (ctx.callbackQuery.data == "reject-newUser") {
    rejectNewUser(newUser, ctx);
  }

});

async function mainScreen(ctx) {
    await ctx.replyWithPhoto(new InputFile("./img/lapiec.jpg"), {
    reply_markup: mainMenu,
    caption: "Меню"
  }); 
}

bot.start();        