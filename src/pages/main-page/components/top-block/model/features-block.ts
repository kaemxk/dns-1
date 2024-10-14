export interface Feature {
  url: string
  naming: string
  description: string
  image: string
}

export const features: Feature[] = [
  {
    url: '/catalog',
    naming: 'Каталог',
    description: 'Большой выбор техники для дома и вас',
    image: '/pages/main-page/components/top-block/images/catalog.png',
  },
  {
    url: '#',
    naming: 'Акции',
    description: 'Скидки, рассрочки, выгодные комплекты',
    image: '/pages/main-page/components/top-block/images/discount.png',
  },
  {
    url: '#',
    naming: 'Собрать ПК',
    description: 'Без проблем с совместимостью',
    image: '/pages/main-page/components/top-block/images/pc.png',
  },
  {
    url: '#',
    naming: 'Подарочные карты',
    description: 'Дарите любимым',
    image: './pages/main-page/components/top-block/images/gift-card.png',
  },
  {
    url: '#',
    naming: 'Готовые сборки',
    description: 'Горячие сборки ПК от пользователей',
    image: '/pages/main-page/components/top-block/images/gotovie-sborki.png',
  },
  {
    url: '#',
    naming: 'Оплата игр и сервисов',
    description: 'Карты оплаты и цифровой контент',
    image: '/pages/main-page/components/top-block/images/oplata.png',
  },
  {
    url: '#',
    naming: 'Сервис',
    description: 'Гарантия, возврат, обмен и ремонт',
    image: '/pages/main-page/components/top-block/images/service.png',
  },
  {
    url: '#',
    naming: 'Собрать кухню',
    description: 'Выбирайте технику для кухни по-новому!',
    image: '/pages/main-page/components/top-block/images/kitchen.png',
  },
  {
    url: '#',
    naming: 'Помощь',
    description: 'Частые вопросы, полезная информация',
    image: '/pages/main-page/components/top-block/images/help.png',
  },
]

export const personalItemBlock = {
  id: 'e77de38b-23ec-41b3-a585-960b0d5caa8f',
  label: 'Как выбрать держатель для смартфона',
  description: 'Интересные гайды и советы по выбору',
  color: '#FFF7DA',
  imageUrl: '/pages/main-page/components/top-block/images/personalBlockDerjatel.svg',
  contentType: 'content',
  buttons: [
    {
      url: '/guide/17a8a1f9-1640-11e5-a679-00259074e77d/',
      type: 'content_hub_open',
      text: 'Прочитать',
    },
  ],
}
