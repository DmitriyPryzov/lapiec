const { Menu } = require("@grammyjs/menu");
const { getDataFromDB } = require("../modules/db");
const Product = require("../models/products");

const buylist = new Menu("buylist")
                .text("Повна закупка", async (ctx) => {
                  products = await getDataFromDB(Product, "");
                   triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
                })
                .row()
                .submenu("По розділам", "section")
                .row()
                .back("<< Назад");


const section = new Menu("section")
  .text("Овочі", async (ctx) => {
    products = await getDataFromDB(Product, "Веган");
    triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
  })
  .row()
  .text("Львів", async (ctx) => {
    products = await getDataFromDB(Product, "Львів");
    triggerPurchase(ctx);
  })
  .row()
  .text("Метро", async (ctx) => {
    products = await getDataFromDB(Product, "Метро");
    triggerPurchase(ctx, "Що потрібно в метро?");
  })
  .row()
  .back("<< Назад");

buylist.register(section);

  async function triggerPurchase(ctx, text = "Напиши кількість потрібних продутів:") {
    await ctx.callbackQuery.message.editCaption(text);
    await ctx.conversation.enter("fullpurchase");
  }

module.exports = buylist;