const  { Composer, InputFile } = require("grammy");
const mainMenu = require("./menu");

const composer = new Composer();

composer.command("start", async (ctx) => {
    await ctx.replyWithPhoto(new InputFile("./img/lapiec.jpg"), {
        reply_markup: mainMenu,
        caption: "adasdasdasds"
    });
});

module.exports = composer;