const { Menu } = require("@grammyjs/menu");

const recipes = new Menu("recipes")
                .submenu("Соуси", "sous")
                .row()
                .submenu("Інше", "other")
                .row()
                .back("<< Назад");

module.exports = recipes;