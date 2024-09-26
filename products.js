const products = [
    {
       "product": "Ананас кільця",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Хорека"
    },
    {
       "product": "Анчоуси",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Львів"
    },
    {
       "product": "Базилік сухий",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Фудпак"
    },
    {
       "product": "Борошно",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Гірчиця діжонська",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Козуб"
    },
    {
       "product": "Гірчиця міцна",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Козуб"
    },
    {
       "product": "Горіх",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Дріжджі",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Каперси",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Львів"
    },
    {
       "product": "Кетчуп",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "1",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Козуб"
    },
    {
       "product": "Корнішони",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Метро"
    },
    {
       "product": "Кукурудза",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Метро"
    },
    {
       "product": "Майонез",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Козуб"
    },
    {
       "product": "Мед",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Оливки чорні б/к",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "1",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Метро"
    },
    {
       "product": "Олія оливкова",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "л",
       "provider": "Львів"
    },
    {
       "product": "Олія рафінована",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "6",
       "category": "Бакалія",
       "nameWeight": "л",
       "provider": "Козуб"
    },
    {
       "product": "Орегано",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Фудпак"
    },
    {
       "product": "Оцет бальзамічний",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "л",
       "provider": "Львів"
    },
    {
       "product": "Оцет яблучний",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Бакалія",
       "nameWeight": "л",
       "provider": "Інші"
    },
    {
       "product": "Паприка солодка",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Спеції"
    },
    {
       "product": "Перець червоний гострий",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Спеції"
    },
    {
       "product": "Перець чорний",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Спеції"
    },
    {
       "product": "Помідори у власному соці",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Олександр Бакалія"
    },
    {
       "product": "Сіль",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Суміш перців «МРІЯ»",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Фудпак"
    },
    {
       "product": "Томатна паста",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Козуб"
    },
    {
       "product": "Тунець консервований",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Львів"
    },
    {
       "product": "Фреш лимонний",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Бакалія",
       "nameWeight": "б",
       "provider": "Інші"
    },
    {
       "product": "Цукор",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Цукор тростинний",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Фудпак"
    },
    {
       "product": "Баварські ковбаски",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Фарро"
    },
    {
       "product": "Бекон (грудинка копчена)",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "5",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Фарро"
    },
    {
       "product": "Прошутто",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "23",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Львів"
    },
    {
       "product": "Салямі золотиста",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "1",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Глобино"
    },
    {
       "product": "Салямі пепероні",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Глобино"
    },
    {
       "product": "Шинка/балик",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Фарро"
    },
    {
       "product": "Сир «ДорБлю»",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Молочні продукти",
       "nameWeight": "кг",
       "provider": "Шинкаренко"
    },
    {
       "product": "Сир «Пармезан»",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Молочні продукти",
       "nameWeight": "кг",
       "provider": "Львів"
    },
    {
       "product": "Сир «Моцарела»",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "Молочні продукти",
       "nameWeight": "кг",
       "provider": "Брусилівський молок.завод"
    },
    {
       "product": "Сир «Рікота»",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Молочні продукти",
       "nameWeight": "кг",
       "provider": "Львів"
    },
    {
       "product": "Гриби свіжі / печериці",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "34",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Груша",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Зелень (кріп/петрушка)",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Огірок свіжий",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Перець болгарський",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Перець чілі",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Помідори",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Помідори чері",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Рукола",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Салат айсберг",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "3",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Цибуля синя",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Часник",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Веган"
    },
    {
       "product": "Броколі",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "овочі",
       "nameWeight": "кг",
       "provider": "Метро"
    },
    {
       "product": "Філе куряче сире (на салат)",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Суми"
    },
    {
       "product": "Філе куряче су-від",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "М'ясні вироби",
       "nameWeight": "кг",
       "provider": "Суми"
    },
    {
       "product": "Лосось",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Рибні продукти",
       "nameWeight": "кг",
       "provider": "Люксор"
    },
    {
       "product": "Хліб тостовий",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Бакалія",
       "nameWeight": "кг",
       "provider": "Інші"
    },
    {
       "product": "Яйця курячі",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "4",
       "category": "Яйця",
       "nameWeight": "шт",
       "provider": "Полтавська птахофабрика"
    },
    {
       "product": "Яйця перепелині",
       "balance": 0,
       "count": 0,
       "lastBuyCount": "2",
       "category": "Яйця",
       "nameWeight": "шт",
       "provider": "перепелині яйця"
    }
 ];

module.exports = products;