const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

bot.start(); 

module.exports = bot;