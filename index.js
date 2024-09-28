require('dotenv').config();

const { Bot, session, InputFile, InlineKeyboard } = require("grammy");
const { Menu } = require("@grammyjs/menu");
const { hydrate } = require("@grammyjs/hydrate");
const { conversations, createConversation } = require("@grammyjs/conversations");
const mongoose = require("mongoose");
const Product = require("./models/products");

// const productsFullList = require("./products-list");
let productsFullList = [];

const db = "mongodb+srv://dmytro:ferma221b@cluster0.snjv0.mongodb.net/lapiec-products?retryWrites=true&w=majority&appName=Cluster0";
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

// INITIALIZATION MENU

const mainMenu = new Menu("main")
                .submenu("Закупка", "buylist")
                .submenu("Рецепти", "recipes")
                
const recipes = new Menu("recipes")
                .submenu("Соуси", "sous")
                .row()
                .submenu("Інше", "other")
                .row()
                .back("<< Назад");

const buylist = new Menu("buylist")
                .text("Повна закупка", async (ctx) => {
                  products = await getDataFromDB("");
                   triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
                })
                .row()
                .submenu("По розділам", "section")
                .row()
                .back("<< Назад");

const section = new Menu("section")
                .text("Овочі", async (ctx) => {
                 products = await getDataFromDB("Веган");
                  triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
                })
                .row()
                .text("Львів", async (ctx) => {
                  products = await getDataFromDB("Львів");
                   triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
                })
                .row()
                .text("Метро", async (ctx) => {
                  products = await getDataFromDB("Метро");
                   triggerPurchase(ctx, "Напиши потрібну кількість овочів:");
                })
                .row()
                .back("<< Назад");


const afterMenuInBuyList = new InlineKeyboard()
                            .text("Головне меню", "mainmenu");

buylist.register(section);
mainMenu.register(buylist);
mainMenu.register(recipes);

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

bot.command("start", mainScreen);

bot.on("callback_query:data", async (ctx) => {
  await ctx.answerCallbackQuery();

  if (ctx.callbackQuery.data === "mainmenu") {
    mainScreen(ctx);
  }

});


// FUNCTIONS

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
  
  saveUpdateDataToDB(products);

  products = [];
}

async function saveUpdateDataToDB(updatedProducts) {
  try {
    const operations = updatedProducts.map(product => ({
      updateOne: {
          filter: { _id: product._id},
          update: { $set: { lastBuyCount: product.lastBuyCount } }
      }
    }));

    await Product.bulkWrite(operations)
                    .then(res => {
                      console.log('Количество обновленных документов:', res.nModified);
                      console.log('Ответ от MongoDB:', res)
                    })
                    .catch(() => console.log("Помилка запису в базу"));
  } catch (err) {
    console.log("Error save updated data to DB " + err);
  }
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
  await ctx.reply("Оберіть дію:", { reply_markup: afterMenuInBuyList });
}

function createStringProductsList(array) {
  let result = "";

  array.forEach(item => {
    result += `${item.product} - ${item.count} ${item.nameWeight}\n`;
  });

  return result == "" ? undefined : result;
}

function getDataFromDB(provider = "") {
  if (provider == "") {
    return  Product.find();
  }
  return  Product.find({ provider: provider });
}

async function triggerPurchase(ctx, text = "Напиши кількість потрібних продутів:") {
  await ctx.callbackQuery.message.editCaption(text);
  await ctx.conversation.enter("fullpurchase");
}

async function mainScreen(ctx) {
  await ctx.replyWithPhoto(new InputFile("./img/lapiec.jpg"), {
      reply_markup: mainMenu,
      caption: "Меню"
  });
}

bot.start();