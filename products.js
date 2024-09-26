const products = [
    {
        "product": "Ананас кільця",
        "balance": 0,
        "count": 1,
        "lastBuyCount": 1,
        "category": "Бакалія",
        "nameWeight": "б",
        "provider": "Хорека - Днепр Віталій (Полтава)"
    },
    {
        "product": "Анчоуси",
        "balance": 0,
        "count": 2,
        "lastBuyCount": 2,
        "category": "Бакалія",
        "nameWeight": "б",
        "provider": "ФОП Рідник Руслан Львів"
    },
    {
        "product": "Базилік сухий",
        "balance": 0,
        "count": 3,
        "lastBuyCount": 3,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "ТОВ 'ФудПак' Полтава"
    },
    {
        "product": "Борошно",
        "balance": 0,
        "count": 4,
        "lastBuyCount": 4,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "Інші"
    },
    {
        "product": "Гірчиця діжонська",
        "balance": 0,
        "count": 5,
        "lastBuyCount": 5,
        "category": "Бакалія",
        "nameWeight": "б",
        "provider": "ПП Козуб (Королівський смак)"
    },
    {
        "product": "Помідори у власному соці",
        "balance": 0,
        "count": 6,
        "lastBuyCount": 6,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "Олександр Бакалія"
    },
    {
        "product": "Сіль",
        "balance": 0,
        "count": 7,
        "lastBuyCount": 7,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "Інші"
    },
    {
        "product": "Суміш перців «МРІЯ»",
        "balance": 0,
        "count": 8,
        "lastBuyCount": 8,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "ТОВ 'ФудПак' Полтава"
    },
    {
        "product": "Томатна паста",
        "balance": 0,
        "count": 9,
        "lastBuyCount": 9,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "ПП Козуб (Королівський смак)"
    },
    {
        "product": "Тунець консервований",
        "balance": 0,
        "count": 0,
        "lastBuyCount": 0,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "ФОП Рідник Руслан Львів"
    },
    {
        "product": "Фреш лимонний",
        "balance": 0,
        "count": 1,
        "lastBuyCount": 1,
        "category": "Бакалія",
        "nameWeight": "б",
        "provider": "Інші"
    },
    {
        "product": "Цукор",
        "balance": 0,
        "count": 2,
        "lastBuyCount": 2,
        "category": "Бакалія",
        "nameWeight": "кг",
        "provider": "Інші"
    },
    {
        "product": "Бекон (грудинка копчена)",
        "balance": 0,
        "count": 3,
        "lastBuyCount": 3,
        "category": "М'ясні вироби",
        "nameWeight": "кг",
        "provider": "Кременчук м'ясо Фарро"
    },
    {
        "product": "Прошутто",
        "balance": 0,
        "count": 4,
        "lastBuyCount": 4,
        "category": "М'ясні вироби",
        "nameWeight": "кг",
        "provider": "ФОП Рідник Руслан Львів"
    },
    {
        "product": "Салямі золотиста",
        "balance": 0,
        "count": 5,
        "lastBuyCount": 5,
        "category": "М'ясні вироби",
        "nameWeight": "кг",
        "provider": "Глобинський м'ясокомбінат"
    },
    {
        "product": "Салямі пепероні",
        "balance": 0,
        "count": 6,
        "lastBuyCount": 6,
        "category": "М'ясні вироби",
        "nameWeight": "кг",
        "provider": "Глобинський м'ясокомбінат"
    },
    {
        "product": "Шинка/балик",
        "balance": 0,
        "count": 7,
        "lastBuyCount": 7,
        "category": "М'ясні вироби",
        "nameWeight": "кг",
        "provider": "Кременчук м'ясо Фарро"
    },
    {
        "product": "Сир «Моцарела»",
        "balance": 0,
        "count": 8,
        "lastBuyCount": 8,
        "category": "Молочні продукти",
        "nameWeight": "кг",
        "provider": "Брусилівський молок.завод"
    },
    {
        "product": "Сир «Рікота»",
        "balance": 0,
        "count": 9,
        "lastBuyCount": 9,
        "category": "Молочні продукти",
        "nameWeight": "кг",
        "provider": "ФОП Рідник Руслан Львів"
    },
    {
        "product": "Гриби свіжі / печериці",
        "balance": 0,
        "count": 1,
        "lastBuyCount": 1,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Груша",
        "balance": 0,
        "count": 2,
        "lastBuyCount": 2,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Зелень (кріп/петрушка)",
        "balance": 0,
        "count": 3,
        "lastBuyCount": 3,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Огірок свіжий",
        "balance": 0,
        "count": 4,
        "lastBuyCount": 4,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Перець болгарський",
        "balance": 0,
        "count": 5,
        "lastBuyCount": 5,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Перець чілі",
        "balance": 0,
        "count": 6,
        "lastBuyCount": 6,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Помідори",
        "balance": 0,
        "count": 7,
        "lastBuyCount": 7,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    },
    {
        "product": "Помідори чері",
        "balance": 0,
        "count": 8,
        "lastBuyCount": 8,
        "category": "Овочі",
        "nameWeight": "кг",
        "provider": "Веган"
    }
];

module.exports = products;