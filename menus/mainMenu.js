const { Menu } = require("@grammyjs/menu");

const buylist = require("./purchaseMenu");
const recipes = require("./recipes");
const settings = require("./settings");

const mainMenu = new Menu("main")
                .submenu("Закупка", "buylist")
                .row()
                .submenu("Рецепти", "recipes")
                .row()
                .submenu("Параметри", "settings");

mainMenu.register(buylist);
mainMenu.register(recipes);
mainMenu.register(settings);


module.exports = mainMenu;