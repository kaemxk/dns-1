export interface Feature {
    url: string;
    naming: string;
    description: string;
    image: string; 
}

export const features: Feature[] = [ 
    {url: '#', naming: 'Каталог',  description: 'Большой выбор техники для дома и вас', image: '../widgets/top-block/images/catalog.png'},
    {url: '#', naming: 'Акции',  description: 'Скидки, рассрочки, выгодные комплекты', image: '../widgets/top-block/images/discount.png'},
    {url: '#', naming: 'Собрать ПК',  description: 'Без проблем с совместимостью', image: '../widgets/top-block/images/pc.png'},
    {url: '#', naming: 'Подарочные карты',  description: 'Дарите любимым', image: '../widgets/top-block/images/gift-card.png'},
    {url: '#', naming: 'Готовые сборки',  description: 'Горячие сборки ПК от пользователей', image: '../widgets/top-block/images/gotovie-sborki.png'},
    {url: '#', naming: 'Оплата игр и сервисов',  description: 'Карты оплаты и цифровой контент', image: '../widgets/top-block/images/oplata.png'},
    {url: '#', naming: 'Сервис',  description: 'Гарантия, возврат, обмен и ремонт', image: '../widgets/top-block/images/service.png'},
    {url: '#', naming: 'Собрать кухню',  description: 'Выбирайте технику для кухни по-новому!', image: '../widgets/top-block/images/kitchen.png'},
    {url: '#', naming: 'Помощь',  description: 'Частые вопросы, полезная информация', image: '../widgets/top-block/images/help.png'},
];