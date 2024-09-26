const { session, Keyboard, Composer } = require("grammy");
const { conversations, createConversation } = require("@grammyjs/conversations");
const { Menu } = require("@grammyjs/menu");
const useConversation = new Composer();

const buylist = new Menu("buylist")
                .text("Повна закупка", buy)
                .row()
                .text("По розділам")
                .row()
                .back("<< Назад");

const quickAnswer = new Keyboard()
                .text("Закінчити")
                .text("0")
                .resized()
                .persistent();

useConversation.use(conversations());
useConversation.use(createConversation(greeting));

async function greeting(conversation, ctx) {

    for (let i = 0; i < product.length; i++) {
       await ctx.reply(product[i].product, {
          reply_markup: quickAnswer
       });
       const count = await conversation.waitFor(":text");
 
       if (count.message.text == "Закінчити") {
          await ctx.reply("Ехх...", {
             reply_markup: {remove_keyboard: true}
          });
          await ctx.reply("Дані не було збережено!", {
             reply_markup: afterBuyMenu
          });
          return
       }
       product[i].count = +count.message.text;
       product[i].lastBuyCount = +count.message.text;
    }
 
    const resBuyList = await createReplyList(product);
 
    await ctx.reply(resBuyList);
    await ctx.reply("Що робимо далі?", {
       reply_markup: afterBuyMenu
    });
 }
 
 async function createReplyList(objectList) {
    let resBuyList = "";
    const resBuyObject = {
       "Хорека - Днепр Віталій (Полтава)": [],
       "ФОП Рідник Руслан Львів": [],
       "ТОВ 'ФудПак' Полтава": [],
       "ПП Козуб (Королівський смак)": [],
       "Метро": [],
       "Олександр Бакалія": [],
       "Кременчук м'ясо Фарро": [],
       "Глобинський м'ясокомбінат": [],
       "Брусилівський молок.завод": [],
       "ФОП Шинкаренко": [],
       "Веган": [],
       "Наша Ряба (Суми)": [],
       "Люксор": [],
       "Полтавська птахофабрика": [],
       "перепелині яйця": [],
       "Інші": []
    };
 
    objectList.forEach(item => {
       if (item.count != 0) {
          resBuyObject[item.provider].push({product: item.product, count: item.count, nameWeight: item.nameWeight});
       }
    });
    
    for (let key in resBuyObject) {
       const selProduct = resBuyObject[key];
 
       for (let i = 0; i < selProduct.length; i++) {
 
          resBuyList += `${selProduct[i].product}: ${selProduct[i].count} ${selProduct[i].nameWeight}\n`;
          if (i === selProduct.length-1) {
             resBuyList += `\n`;
          }
       }
    }
 
    return resBuyList;
 }

 async function buy(ctx) {
   await ctx.callbackQuery.message.editCaption("Напиши кількість потрібних продутів:");
   await ctx.conversation.enter("greeting");
}
 module.exports = buylist;