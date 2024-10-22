require('dotenv').config();

const bot = require("./bot");
const { session, InputFile } = require("grammy");
const { hydrate } = require("@grammyjs/hydrate");
const { conversations, createConversation } = require("@grammyjs/conversations");
const initMainMenu = require("./menus/mainMenu");
const fullpurchase = require("./conversation/fullpurchase");

const { requestAutorization, acceptNewUser, rejectNewUser } = require("./callbacks/requestNewUser");

const { notAutorizMenu }  = require("./menus/afterProcessMenu");

const { showEditModeMenu, editUserMode, deleteUser } = require("./callbacks/accessControl");

//functions DB
const mongoose = require("mongoose");
const { getUserFromDB } = require("./modules/db");

//Models
const Product = require("./models/products");
const Users = require("./models/user");
const newUser = require('./models/newUser');
const { index } = require('./menus/purchaseMenu');

// const productsFullList = require("./products-list"); 
const db = process.env.DB_LINK_KEY;



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

// COMMANDS

bot.command("start", async (ctx) => {
  const isUser = await getUserFromDB(Users, ctx.message.from.id);
  
  if (isUser) {
    const mainMenu = initMainMenu(isUser.mode);
    bot.use(mainMenu);
    await mainScreen(ctx);
  } else {
    await ctx.reply("Ти не є працівником Лап'єц", { reply_markup: notAutorizMenu});
  }
});

bot.on("callback_query:data", async (ctx) => {
  await ctx.answerCallbackQuery();

  const data = ctx.callbackQuery.data;

  const getIdFromCallbackQuery = (value) => {
    return value.split("-")[1];
  }

  if (data === "mainmenu") {
    mainScreen(ctx);
  }
  if (data === "request") {
    requestAutorization(newUser, ctx);
  }
  if (data.startsWith("accept-")) {
    acceptNewUser(bot, Users, ctx, getIdFromCallbackQuery(data));
  }
  if (data.startsWith("reject-")) {
    rejectNewUser(newUser, ctx, getIdFromCallbackQuery(data));
  }
  
  if (data.startsWith("editMode-")) {
    showEditModeMenu(ctx, getIdFromCallbackQuery(data));
  }
  if (data.startsWith("setAdmin-")) {
    editUserMode(ctx, getIdFromCallbackQuery(data), "admin");
  }
  if (data.startsWith("setModerator-")) {
    editUserMode(ctx, getIdFromCallbackQuery(data), "moderator");
  }
  if (data.startsWith("setUser-")) {
    editUserMode(ctx, getIdFromCallbackQuery(data), "user");
  }
  if (data.startsWith("deleteUser-")) {
    deleteUser(ctx, getIdFromCallbackQuery(data));
  }
});

async function mainScreen(ctx) {
    await ctx.replyWithPhoto(new InputFile("./img/lapiec.jpg"), {
    reply_markup: mainMenu,
    caption: "Меню"
  }); 
}

       

