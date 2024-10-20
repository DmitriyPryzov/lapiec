const { saveUpdateDataToDB } = require("../modules/db");
const Product  = require("../models/products");
const { returnMenu }  = require("../menus/afterProcessMenu");

async function fullpurchase(conversation, ctx) {
    const providers = {
      "Хорека": [],
      "Львів": [],
      "Фудпак": [],
      "Козуб": [],
      "Метро": [],
      "Олександр Бакалія": [],
      "Фарро": [],
      "Глобино": [],
      "Брусил": [],
      "Шинкаренко": [],
      "Веган": [],
      "Суми": [],
      "Люксор": [],
      "Полтавська птахофабрика": [],
      "перепелині яйця": [],
      "Спеції": [],
      "Інші": []
    };
  
    for (let i = 0; i < products.length; i++) {
      await ctx.reply(
  `<b>${products[i].product}</b>
  <code>Попереднє: ${products[i].lastBuyCount} ${products[i].nameWeight}</code>`, {parse_mode: "HTML"});
  
      const answer = await conversation.waitFor(":text");
      const count = answer.message.text;
  
      if (count == "ок" || count == "х" || count == "ok" || count == "x") {
        getShoppingList(ctx, providers);
        return;
      }
  
      if (isNaN(count)) {
        await ctx.reply("Введіть числове значення!")
        i--;
      } else {
        if (count !== "0") {
          try {
            providers[products[i].provider].push({
              product: products[i].product,
              count: count,
              nameWeight: products[i].nameWeight
            });
            products[i].lastBuyCount = count;
          } catch (error){
            console.error("Помилка занесення даних! " + error);
          }
        }
      }
    }
    
    getShoppingList(ctx, providers);
    
    saveUpdateDataToDB(Product, products);
  
    products = [];
}

async function getShoppingList(ctx, objProviders) {
    const keys = Object.keys(objProviders);
    for (let i = 0; i <= keys.length-1; i++) {
      const arr = objProviders[keys[i]];
   
      
      if (arr.length > 0) {
        const readyList = createStringProductsList(arr);
  
        await ctx.reply(readyList ? readyList : "Список пустий");
      }
    }
    await ctx.reply("Оберіть дію:", { reply_markup: returnMenu });
  }

  function createStringProductsList(array) {
    let result = "";
  
    array.forEach(item => {
      result += `${item.product} - ${item.count} ${item.nameWeight}\n`;
    });
  
    return result == "" ? undefined : result;
  }

  module.exports = fullpurchase;