require('dotenv').config();

const { Bot, session, InputFile, InlineKeyboard } = require("grammy");
const { Menu } = require("@grammyjs/menu");
const { hydrate } = require("@grammyjs/hydrate");
const { conversations, createConversation } = require("@grammyjs/conversations");
const productsFullList = require("./products");

const bot = new Bot(process.env.BOT_API_KEY);


let products = [];
let posInBuyList = 0;


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
                .text("Повна закупка", fullChapter)
                .row()
                .submenu("По розділам", "section")
                .row()
                .back("<< Назад");

const section = new Menu("section")
                .text("Овочі", buyVegetables)
                .row()
                .text("Львів")
                .row()
                .text("Метро")
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
    await ctx.reply(products[i].product);
    const answer = await conversation.waitFor(":text");
    const count = answer.message.text;

    if (count == "ок" || count == "х") {
      const listProducts = createListProducts(providers);
      await ctx.reply(listProducts ? listProducts : "Список пустий", { reply_markup: afterMenuInBuyList });
      posInBuyList = i;
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
        } catch (error){
          console.error("Помилка занесення даних! " + error);
        }
      }
    }
  }
  
  const keys = Object.keys(providers);

  for (let i = 0; i < keys.length; i++) {
    const arr = providers[keys[i]];

    if (arr.length > 0) {
      const readyList = createListProducts(arr);
      if (i === keys.length-1) {
        await ctx.reply(readyList ? readyList : "Список пустий", { reply_markup: afterMenuInBuyList });
      } else {
        await ctx.reply(readyList ? readyList : "Список пустий");
      }
    }
  }

  products = [];
}

function createListProducts(array) {
  let result = "";

  array.forEach(item => {
    result += `${item.product} - ${item.count} ${item.nameWeight}\n`;
  });

  return result == "" ? undefined : result;
}

async function fullChapter(ctx) {
  products = productsFullList.filter(item => item);
  await ctx.callbackQuery.message.editCaption("Напиши кількість потрібних продутів:");
  await ctx.conversation.enter("fullpurchase");
}

async function buyVegetables(ctx) {
  products = productsFullList.filter(item => item.provider == "Веган");
  await ctx.callbackQuery.message.editCaption("Напиши потрібну кількість овочів:");
  await ctx.conversation.enter("fullpurchase");
}


async function mainScreen(ctx) {
  await ctx.replyWithPhoto(new InputFile("./img/lapiec.jpg"), {
      reply_markup: mainMenu,
      caption: "Меню"
  });
}

bot.start();